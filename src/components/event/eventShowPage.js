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
        <View>
          <View style={modalStyle.dateTitle}>
            <Text style={modalStyle.showTitle}>{params.title}</Text>
            <Text style={modalStyle.date}>{params.date}</Text>
            <Text style={modalStyle.date}>{params.time}</Text>
            <Text>{params.address}</Text>
          </View>
          <Text style={modalStyle.description}>{params.description}</Text>

          <View style={modalStyle.joinedView}>
            <Text>THIS IS WHERE COMMENTS OR PEOPLE THAT HAVE JOINED WILL BE VIEWED</Text>
          </View>


          <View style={modalStyle.modalButtonContainer}>
            <TouchableOpacity
              style={modalStyle.backButton}
              onPress={() => this.reset()}
              >
              <Text style={modalStyle.backButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyle.backButton}
              onPress={() => this.reset()}
              >
              <Text style={modalStyle.joinButtonText}>Join</Text>
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

const modalStyle = StyleSheet.create({
  dateTitle: {
    marginTop: 20,
    alignItems: 'center',
  },
  date: {
    marginRight: 10,
  },
  description: {
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
  fullScreen: {
    marginTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  showTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',

  },
  backButton: {
    alignSelf: 'flex-end',
    width: '45%',
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding: 10,
    textAlign: 'center',
  },
  joinButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    padding: 10,
    textAlign: 'center',
  }
});
