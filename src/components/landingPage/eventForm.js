import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, Card, CardSection } from '../common';
import { NavigationActions } from 'react-navigation';
import Geocoder from 'react-native-geocoding';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      time: "",
      date: "",
      longitude: this.props.navigation.state.params.longitude,
      latitude: this.props.navigation.state.params.latitude,
      host: this.props.currentUser,
      attendees: [],
      address: ""
    };
    this.onCreateEvent = this.onCreateEvent.bind(this);
    this.coordsToAddress = this.coordsToAddress.bind(this);
  }

  componentWillMount() {
    this.coordsToAddress();
  }

  coordsToAddress() {
    const { params } = this.props.navigation.state;

    Geocoder.setApiKey('AIzaSyAjlc_-1s0PP53gxwcZHpGtNQryjcKzvZs');
    Geocoder.getFromLatLng(
      this.props.navigation.state.params.latitude,
      this.props.navigation.state.params.longitude
    ).then(
      json => this.setState({
        address: json.results[0].formatted_address
      }),
      error => alert(error)
    );
  }

  reset() {
    const { currentEvent } = this.props;
    return this.props.navigation.dispatch(NavigationActions.reset(
      {
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'LandingPage'}),
          NavigationActions.navigate({
            routeName: 'EventShowPage',
            params: { _id: currentEvent._id }
         })
        ]
      }
    ));
  }

  onCreateEvent() {
    const { title, description, latitude,
            longitude, date, time, host, address } = this.state;
    const { currentUser, currentEvent } = this.props;
    this.props.createEvent({
      title: title,
      description: description,
      latitude: latitude,
      longitude: longitude,
      date: date,
      time: time,
      host: currentUser,
      address: address
    })
    .then(res => this.props.updateUser({
      _id: currentUser._id,
      hostedEvents: currentUser.hostedEvents.concat([res.event._id])
    }))
    .then(
      () => this.reset()
    );
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <ScrollView scrollEnabled={false}>
          <View style={styles.formContent}>
            <Text style={styles.formTitle}>Create Event</Text>
            <View style={styles.inputBox}>
              <Input placeholder="Name of Event"
                label="Title"
                value={this.state.title}
                onChangeText={title => this.setState({ title })}
              />
            </View>
            <View style={styles.inputBox}>
              <Input
                placeholder="Add a description!"
                label="Description"
                value={this.state.description}
                onChangeText={description => this.setState({ description })}
              />
            </View>
            <View style={styles.inputBox}>
              <Input
                placeholder="Date"
                label="Date"
                value={this.state.date}
                onChangeText={date => this.setState({ date })}
              />
            </View>
            <View style={styles.inputBox}>
              <Input
                labelStyle={styles.labelStyle}
                placeholder="Time"
                label="Time"
                value={this.state.time}
                onChangeText={time => this.setState({ time })}
              />
            </View>


          </View>
          <TouchableOpacity
            onPress={() => this.onCreateEvent()}
            >
            <Text style={styles.submitButton}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>


      </View>
    );
  }
}

export default EventForm;


const styles = StyleSheet.create({
  submitButton: {
    color: '#00AB6C',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#00AB6C',
    borderRadius: 5,
    width: '70%',
    padding: 10,
    marginBottom: '10%',
  },
  formContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  formContent: {
    width: '95%',
    height: '100%',
  },
  inputBox: {
    margin: 10,
  },
  labelStyle: {
    paddingRight: 5,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    margin: '10%',
  }
})
