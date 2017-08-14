import React from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, TouchableHighlight, Picker } from 'react-native';
import { MapView } from 'expo';
import { Button, Card, CardSection } from '../common';
import { NavigationActions } from 'react-navigation';
import Expo from 'expo';

const markers = [];

class LandingPage extends React.Component {
  //
  // static navigationOptions = {
  //     title: 'Map'
  //   };

  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
      modalVisible: false,
      userModalVisible: false,
      latitude: null,
      longitude: null,
      markers: null,
      currentUser: null,
      // user: null,
    }
    this.mapPressLong = this.mapPressLong.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleUserModal = this.toggleUserModal.bind(this);
    this.navigateEventForm = this.navigateEventForm.bind(this);
    this.navigateUserPage = this.navigateUserPage.bind(this);
    this.navigateLogout = this.navigateLogout.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentWillMount() {
    this.props.requestAllEvents();
  }
  componentDidMount(){
    // this.props.requestAllEvents();
    this._getLocationAsync();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentUser !== nextProps.currentUser) {
      this.props.receiveCurrentUser(nextProps.currentUser);
    }
  }

  _getLocationAsync = async () => {
    const { Location, Permissions } = Expo;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };


  mapPressLong(e) {
    //nativeEvent.coordinate will obtain coordinates
    const lon = e.nativeEvent.coordinate.longitude
    const lat = e.nativeEvent.coordinate.latitude
    this.setState({latitude: lat, longitude: lon })
    this.toggleModal()
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  toggleUserModal() {
    this.setState({userModalVisible: !this.state.userModalVisible})
  }

  _renderTouchableOpacity = (text, onPress = null, buttonStyle = null, textStyle = null) => (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )

  navigateEventForm() {
    const { navigate } = this.props.navigation
    navigate('EventForm', {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    });
    this.toggleModal();
  }

  navigateUserPage() {
    const { navigate } = this.props.navigation
    navigate('UserShowContainer')
    this.toggleUserModal();
  }

  navigateLogout() {
    const { navigate } = this.props.navigation
    this.reset();

    this.props.logoutUser();
    this.toggleUserModal();
  }

  reset(){
    return this.props.navigation.dispatch(NavigationActions.reset(
      {
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SessionForm'})
        ]
      }));
  }
  _renderModalContent() {

    return(
      <View style={eventModal.container}>
        <View style={eventModal.content}>
          {this._renderTouchableOpacity("Create Event", () => {this.navigateEventForm()}, eventModal.button, button.text)}
          {this._renderTouchableOpacity("Close Modal", () => {this.toggleModal()}, styles.modalButton)}
        </View>
      </View>
    );
  }

  _renderUserModalContent() {

    return(
      <View style={userModal.container}>
        <View style={userModal.content}>
          <View style={{ marginLeft: '10%', flexDirection: 'row'}}>
            {this._renderTouchableOpacity("Profile", () => {this.navigateUserPage()}, userModal.userButton, userModal.userButtonText)}
            {this._renderTouchableOpacity("Logout", () => {this.navigateLogout()}, userModal.userButton, userModal.userButtonText)}
            {this._renderTouchableOpacity("X", () => {this.toggleUserModal()}, userModal.userButton, userModal.userCloseText)}
          </View>
        </View>
      </View>
    );
  }

  render() {
    if (!this.state.location) {
      return null
    }

    if(!this.props.currentUser) {
      return null;
    }


    const { events, currentUser } = this.props;
    const { navigate } = this.props.navigation;

     const long = this.state.location.coords.longitude;
     const lat = this.state.location.coords.latitude;
      return (
        <View style={styles.container} >
          <MapView
             style={styles.map}
             initialRegion={{
               latitude: lat,
               longitude: long,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
             onLongPress={this.mapPressLong}
           >
           { events.map(event => (
               <MapView.Marker
                 coordinate={{
                   latitude: event.latitude,
                   longitude: event.longitude
                 }}
                 onCalloutPress={() => navigate('EventShowPage', {
                    title: event.title,
                    latitude: event.latitude,
                    longitude: event.longitude,
                    description: event.description,
                    time: event.time,
                    date: event.date,
                    address: event.address,
                    hostName: event.host.fullName
                  })
                }

                 key={`event-${event._id}`}
                 title={event.title}
                 description={event.description}
               >
             </MapView.Marker>
             ))}
           </MapView>


           <View style={styles.photoContainer}>
             <TouchableOpacity
               onPress={() => this.toggleUserModal()}
               >
               <Image
               style={styles.userPhoto}
               source={{uri: `${currentUser.avatar}`}}
               />
             </TouchableOpacity>
           </View>

          <View style={styles.bottomNavigation}>
            {this._renderTouchableOpacity("Events Index", () => navigate('EventIndexContainer'), button.style, button.text)}
            {this._renderTouchableOpacity("Issues Index", () => navigate('EventIndexContainer'), button.style, button.text)}
          </View>

           <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setState({modalVisible: false})}}
            >
            {this._renderModalContent()}
            </Modal>
           <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.userModalVisible}
            onRequestClose={() => {this.setState({userModalVisible: false})}}
            >
            {this._renderUserModalContent()}
            </Modal>
        </View>


    );
  }
}

const userModal = StyleSheet.create({
  userCloseText: {
    color: 'white',
    marginTop: 10,
    marginLeft: 30,
    fontSize: 18,
  },
  userButtonText: {
    color: 'white',
    margin: 10,
    fontSize: 16,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    position: 'absolute',
    backgroundColor: 'rgba(30,30,30,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 30,
    width: '75%',
    height: 60,
  }
});

const eventModal = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '60%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 3,
    backgroundColor: 'white',
    borderColor: '#00AB6C',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    height: 40,
    width: '80%',
    marginBottom: '10%',
  },
});

const button = StyleSheet.create({
  style: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 3,
    backgroundColor: 'white',
    borderColor: '#00AB6C',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin: 10,
    height: 40,
    width: '100%',
  },
  text: {
    color: '#00AB6C',
    textAlign: 'center',
    fontSize: 18,
  }
});

const styles = StyleSheet.create({
  userPhoto: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: '90%',
  },
  photoContainer: {
    position: 'relative',
    marginTop: 20,
    marginLeft: 10,
    width: 60,
    height: 60,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomNavigation: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: '90%',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LandingPage;
