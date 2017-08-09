import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import { Button, Card, CardSection } from '../common';
import Expo from 'expo';

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
      modalVisible: false,
    }
    this.mapPress = this.mapPress.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
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

  mapPress(e) {
    //nativeEvent.coordinate will obtain coordinates
    console.log(e.nativeEvent.coordinate)
    this.setState({modalVisible: true})
    console.log(this.state.modalVisible)
  }

  setModalVisible() {
    this.setState({modalVisible: true})
  }

  _renderModalContent = () => (
    <View style={styles.modalFullScreen}>
      <Card style={styles.modalContent}>
        <CardSection>
          <TouchableOpacity
            style={styles.buttonStyle}
            >
            <Text style={styles.buttonText}>Create Event</Text>
          </TouchableOpacity>
        </CardSection>
        <CardSection>
          <TouchableOpacity
            style={styles.buttonStyle}
            >
            <Text style={styles.buttonText}>Report Issue</Text>
          </TouchableOpacity>
        </CardSection>
      </Card>
    </View>
  )

  render() {
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
             onLongPress={this.mapPress}
           >
             <MapView.Marker
               coordinate={{
                 latitude: lat,
                 longitude: long,
               }}
               title="Current Location"
              />

             <CardSection style={styles.eventIndexButton}>
               <TouchableOpacity
                 style={styles.buttonStyle}
                 >
                 <Text style={styles.buttonText}>Event Index</Text>
               </TouchableOpacity>
             </CardSection>

           </ MapView>
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
    bottom: 0,
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
