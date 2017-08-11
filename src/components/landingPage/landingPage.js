import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MapView } from 'expo';
import { Button, Card, CardSection } from '../common';
import Expo from 'expo';
const markers = [];

class LandingPage extends React.Component {

  static navigationOptions = {
      title: 'Map',
    };

  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
      modalVisible: false,
      latitude: null,
      longitude: null,
      markers: null,
    }
    this.mapPressLong = this.mapPressLong.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.navigateEventForm = this.navigateEventForm.bind(this);
  }

  componentWillMount() {
    this.props.requestAllEvents();
  }
  componentDidMount(){
    this.props.requestAllEvents();
    this._getLocationAsync();
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
    const long = e.nativeEvent.coordinate.longitude
    const lat = e.nativeEvent.coordinate.latitude
    this.setState({latitude: lat, longitude: long })
    this.toggleModal()
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible})
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
    navigate('EventForm', {createEvent: this.props.createEvent,
     latitude: this.state.latitude,
     longitude: this.state.longitude,
    });
    this.toggleModal();
  }
  _renderModalContent() {

    return(
      <View style={styles.modalFullScreen}>
        <View style={styles.modalContent}>
          {this._renderTouchableOpacity("Create Event", () => {this.navigateEventForm()}, styles.modalButton, styles.modalButtonText)}
          {this._renderTouchableOpacity("Report Issue", null, styles.modalButton, styles.modalButtonText)}
          {this._renderTouchableOpacity("Close Modal", () => {this.toggleModal()}, styles.modalButton, styles.modalButtonText)}
        </View>
      </View>
    );
  }

  render() {
    if (!this.state.location) {
      return null
    }


    const { events } = this.props;
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
                 key={event._id}
                 title={event.title}
                 description={event.description}
               />
             ))}
           </ MapView>

           <CardSection style={styles.bottomNavigation}>
              {this._renderTouchableOpacity("Events Index", () => navigate('EventIndexContainer'), styles.buttonStyle, styles.buttonText)}
              {this._renderTouchableOpacity("Issues Index", () => navigate('EventIndexContainer'), styles.buttonStyle, styles.buttonText)}
            </CardSection>

           <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setState({modalVisible: false})}}
            >
            {this._renderModalContent()}
            </ Modal>
        </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '10%',
  },
  modalFullScreen: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '60%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 3,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#00AB6C',
    margin: 10,
    height: 40,
    width: '70%',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#00AB6C',
    fontSize: 16,
    padding: 5
  },
  cardSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomNavigation: {
    position: 'absolute',
    top: '90%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalButtonText: {
    margin: '10%',
  }
});

export default LandingPage;
