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
    this.onJoinEvent = this.onJoinEvent.bind(this);
    this.onLeaveEvent = this.onLeaveEvent.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    return this.props.navigation.dispatch(NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'LandingPage'}),
        NavigationActions.navigate({ routeName: 'EventIndexContainer'})
      ]
    }));
  }

  componentWillMount() {
    const { _id } = this.props.navigation.state.params;
    this.props.requestSingleEvent(_id).then(
      () => this.coordsToAddress()
    );
  }

  coordsToAddress() {
    const { currentEvent } = this.props;
    Geocoder.setApiKey('AIzaSyAjlc_-1s0PP53gxwcZHpGtNQryjcKzvZs');
    Geocoder.getFromLatLng(currentEvent.latitude, currentEvent.longitude)
    .then(json =>  {
      const add = json.results[0].formatted_address;
      return add;
    },
    error => {
      alert(error);
    });
  }

  onJoinEvent() {
    const { _id, address, attendees } = this.props.currentEvent;
    const { currentUser } = this.props;
    this.props.updateEvent({
      _id,
      attendees: attendees.concat([currentUser._id])
    })
    .then(() => this.props.updateUser({
        _id: currentUser._id,
        joinedEvents: currentUser.joinedEvents.concat([_id])
      }))
    .then(
      () => this.reset()
    );
  }

  onLeaveEvent() {
    const { _id, address, attendees } = this.props.currentEvent;
    const { currentUser } = this.props;
    this.props.updateEvent({
      _id,
      attendees: attendees.filter(id => id !== currentUser._id)
    })
    .then(() => this.props.updateUser({
        _id: currentUser._id,
        joinedEvents: currentUser.joinedEvents.filter(id => id !== _id)
      }))
    .then(
      () => this.reset()
    );
  }

  joinOrLeaveButton() {
    const { _id, address, attendees } = this.props.currentEvent;
    const { currentUser } = this.props;
    if (attendees.includes(currentUser._id)) {
      return(
        <TouchableOpacity
          style={button.button}
          onPress={() => this.onLeaveEvent()}
          >
          <Text style={button.buttonText}>Join</Text>
        </TouchableOpacity>
      );
    } else {
      return(
        <TouchableOpacity
          style={button.button}
          onPress={() => this.onJoinEvent()}
          >
          <Text style={button.buttonText}>Join</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    const { currentEvent, currentUser } = this.props;
    if (!currentEvent) {
      return null;
    }

    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentEvent.latitude,
            longitude: currentEvent.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0121,
          }}
          onLongPress={this.mapPressLong}
        >
          <MapView.Marker
            coordinate={{
              latitude: currentEvent.latitude,
              longitude: currentEvent.longitude
            }}
            title={currentEvent.title}
            description={currentEvent.description}
          />
        </MapView>
        <View style={showInfo.container}>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={showInfo.dateTime}>
              <Text style={[showInfo.showDetails, showInfo.date]}>{currentEvent.date}</Text>
              <Text style={showInfo.showDetails}>{currentEvent.time}</Text>
            </View>

            <Text style={showInfo.title}>{currentEvent.title}</Text>

          </View>

          <Text style={[showInfo.showDetails, showInfo.address]}>
            {currentEvent.address}
          </Text>
          <Text style={{textAlign: 'center', margin: '5%'}}>
            Host: {currentEvent.host.fullName}
          </Text>
          <Text style={{textAlign: 'center', margin: '5%'}}>
            {currentEvent.description}
          </Text>

          <View style={button.modalButtonContainer}>
            <TouchableOpacity
              style={button.button}
              onPress={() => this.reset()}
              >
              <Text style={button.buttonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={button.button}
              onPress={() => this.onJoinEvent()}
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
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '30%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  dateTime: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  showDetails: {
    textAlign: 'center',
  },
  address: {
    width: '60%',
    alignSelf: 'center',
    color: 'grey',
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
    height: '50%',
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
