import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <MapView
           style={styles.map}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
         />
        <Text style={styles.text}>Welcome to the nightmare!</Text>
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
