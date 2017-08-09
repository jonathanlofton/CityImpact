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
    }
    this.mapPressLong = this.mapPressLong.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){
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
    this.toggleModal()
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  _renderTouchableOpacity = (text, onPress = null) => (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={onPress}
      >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )

  _renderModalContent = () => (
    <View style={styles.modalFullScreen}>
      <Card style={styles.modalContent}>
        <CardSection style={styles.cardSection}>
          {this._renderTouchableOpacity("Create Event")}
        </CardSection>
        <CardSection>
          {this._renderTouchableOpacity("Report Issue")}
        </CardSection>
        <CardSection>
          {this._renderTouchableOpacity("Close Modal", () => {this.toggleModal()})}
        </CardSection>
      </Card>
    </View>
  )

  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.location) {
      return null
    }

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
             <MapView.Marker
               coordinate={{
                 latitude: lat,
                 longitude: long,
               }}
               title="Current Location"
              />
           </ MapView>

           <CardSection style={styles.bottomNavigation}>
              {this._renderTouchableOpacity("Events Index", () => navigate('EventIndexContainer'))}
              {this._renderTouchableOpacity("Issues Index", () => navigate('EventIndexContainer'))}
            </CardSection>

           <Modal
            animationType={"slide"}
            transparent={true}
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
    height: '20%',
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
  }
});

export default LandingPage;


// this will take all markers that have been created and
// place a marker somewhere on the map
// {this.state.markers.map(marker => (
//     <MapView.Marker
//       coordinate={marker.latlng}
//       title={marker.title}
//       description={marker.description}
//     />
//   ))}
