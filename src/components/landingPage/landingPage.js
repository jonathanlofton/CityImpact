import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import { MapView } from 'expo';

class LandingPage extends React.Component {
  render() {
    return (

      <MapView
         style={styles.map}
         initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
       />

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
