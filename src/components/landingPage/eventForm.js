import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, Card, CardSection } from '../common';
import { NavigationActions } from 'react-navigation';
import Geocoder from 'react-native-geocoding';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      title: "",
      description: "",
      time: "",
      date: "",
      longitude: this.props.navigation.state.params.longitude,
      latitude: this.props.navigation.state.params.latitude,
      host: this.props.currentUser
    };
    this.onCreateEvent = this.onCreateEvent.bind(this);
    this.navigateEventShowPage = this.navigateEventShowPage.bind(this);
    this.coordsToAddress = this.coordsToAddress.bind(this);
  }
  componentWillMount() {
    this.coordsToAddress();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.currentUser !== nextProps.currentUser) {
  //     this.props.receiveCurrentUser(nextProps.currentUser);
  //   }
  // }

  coordsToAddress() {
    const { params } = this.props.navigation.state;

    Geocoder.setApiKey('AIzaSyAjlc_-1s0PP53gxwcZHpGtNQryjcKzvZs');
    Geocoder.getFromLatLng(
      this.props.navigation.state.params.latitude,
      this.props.navigation.state.params.longitude
    ).then(
      json =>  {
      this.setState({address: json.results[0].formatted_address});
    },
    error => {
      alert(error);
    });
  }


  navigateEventShowPage(res) {
    // const { navigate } = this.props.navigation
    const { navigate } = this.props.navigation;
    // const { res } = this.props;
    navigate('EventShowPage', {title: res.event.data.event.title,
     latitude: res.event.data.event.latitude,
     longitude: res.event.data.event.longitude,
     description: res.event.data.event.description,
     time: res.event.data.event.time,
     date: res.event.data.event.date,
     address: res.event.data.event.address
    });

  }

  reset(res){
    return this.props.navigation.dispatch(NavigationActions.reset(
      {
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'LandingPage'}),
          NavigationActions.navigate({ routeName: 'EventShowPage', params: {title: res.event.title,
           latitude: res.event.latitude,
           longitude: res.event.longitude,
           description: res.event.description,
           time: res.event.time,
           date: res.event.date,
           address: res.event.address,
           host: res.event.host
         }})
        ]
      }
    ));
  }

  onCreateEvent() {
    const { title, description, latitude,
            longitude, date, time, host } = this.state;
    this.props.createEvent({
      title: title,
      description: description,
      latitude: latitude,
      longitude: longitude,
      date: date,
      time: time,
      host: host
    }).then(res => {
        this.props.updateUser({
          id: host.id,
          hostedEvents: host.hostedEvents.concat([this.props.currentEvent._id]),
          joinedEvents: host.joinedEvents
        });
        this.reset(res);
      },
      err => console.log(err)
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
