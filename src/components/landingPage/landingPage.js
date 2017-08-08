import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import Expo from 'expo';

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
    }
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



  render() {
    if (!this.state.location) {
      return null
    }





    let text = 'Waiting..';
     if (this.state.errorMessage) {
       text = this.state.errorMessage;
     } else if (this.state.location) {
       text = JSON.stringify(this.state.location);
     }
     console.log(this.state.location)
     const long = this.state.location.coords.longitude;
     const lat = this.state.location.coords.latitude;
     console.log(long)
     console.log(lat)
    return (
      <View style={styles.container}>
        <MapView
           style={styles.map}
           initialRegion={{
             latitude: lat,
             longitude: long,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
         >
       <MapView.Marker
         coordinate={{
           latitude: lat,
           longitude: long,
         }}
         title="Current Location"
         />
       </ MapView>
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
