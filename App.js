import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import { MapView } from 'expo';
import SessionForm from './src/components/session/sessionForm';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Header />
        </View>
        <View>
          <SessionForm />
        </View>

        <Text>Welcome to the nightmare!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
