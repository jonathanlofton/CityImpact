import React from 'react';
import { CardSection } from '../common';
import { Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { MapView } from 'expo';
import { NavigationActions } from 'react-navigation';
import Geocoder from 'react-native-geocoding';

class EventShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.coordsToAddress = this.coordsToAddress.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(){
    return this.props.navigation.dispatch(NavigationActions.reset(
      {
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'LandingPage'}),
          NavigationActions.navigate({ routeName: 'EventIndexContainer'})
        ]
      }));
  }

  componentWillMount() {
    this.coordsToAddress();
  }

  coordsToAddress() {
    const { params } = this.props.navigation.state;

    Geocoder.setApiKey('AIzaSyAjlc_-1s0PP53gxwcZHpGtNQryjcKzvZs');
    Geocoder.getFromLatLng(params.latitude, params.longitude)
    .then(json =>  {
      const add = json.results[0].formatted_address;
      return add;
    },
    error => {
      alert(error);
    });
  }

  render() {
    console.log(this.props);
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <MapView
           style={styles.map}
           initialRegion={{
             latitude: params.latitude,
             longitude: params.longitude,
             latitudeDelta: 0.0422,
             longitudeDelta: 0.0121,
           }}
           onLongPress={this.mapPressLong}
         >
         <MapView.Marker
           coordinate={{
             latitude: params.latitude,
             longitude: params.longitude
           }}
           title={params.title}
           description={params.description}
         />
       </MapView>
        <View style={showInfo.showInfo}>
          <View style={showInfo.dateTitle}>
            <Text style={showInfo.showTitle}>{params.title}</Text>
            <Text style={[showInfo.showDetails, showInfo.address]}>{params.address}</Text>
            <Text style={[showInfo.showDetails, showInfo.date]}>{params.date}</Text>
            <Text style={showInfo.showDetails}>{params.time}</Text>
            <Text style={showInfo.showDescription}>{params.description}</Text>
          </View>


          <View style={showInfo.joinedView}>
          </View>


          <View style={button.modalButtonContainer}>
            <TouchableOpacity
              style={[button.button]}
              onPress={() => this.reset()}
              >
              <Text style={button.buttonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={button.button}
              onPress={() => this.reset()}
              >
              <Text style={button.buttonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );


  }
}

export default EventShowPage;

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
    bottom: '70%',
  },
});

const showInfo = StyleSheet.create({
  showInfo: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '30%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  dateTitle: {
    alignSelf: 'center',
    width: '80%',
    marginTop: '5%',
    alignItems: 'center',
  },
  showTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  showDetails: {
    textAlign: 'center',
  },
  address: {
    margin: '2%',
  },
  date: {
    fontWeight: '600',
  },
  showDescription: {
    marginTop: '10%',
    marginBottom: '10%',
    width: '70%',
    alignSelf: 'center',
  },
  joinedView: {
    height: '30%',
    width: '70%',
    alignSelf: 'center',
  },
});

const button = StyleSheet.create({
  modalButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    width: '45%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding: 10,
    textAlign: 'center',
  },
});
