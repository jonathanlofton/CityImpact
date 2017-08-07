import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>CityImpact</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "900",
    padding: 15,
  }
});
