import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Card, CardSection } from '../common';
// import { SingleDatePicker } from 'react-dates';

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
      latitude: this.props.navigation.state.params.latitude
    };
    this.onCreateEvent = this.onCreateEvent.bind(this);

  }



  onCreateEvent() {
    const { navigate } = this.props.navigation;
    this.props.navigation.state.params.createEvent({
      title: this.state.title,
      description: this.state.description,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      date: this.state.date,
      time: this.state.time,
    }).then((res) => navigate('LandingPage'), (err) => console.log(err));

  }

  render() {
    console.log(this.state);
    return(
      <View>
      <ScrollView scrollEnabled={false}>
      <CardSection>
        <Input
          placeholder="Name of Event"
          label = "title"
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        </CardSection>
        <CardSection>
        <Input
          placeholder="Add a description!"
          label = "description"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        </CardSection>
        <CardSection>
        <Input
          placeholder="Date"
          label = "date"
          value={this.state.date}
          onChangeText={date => this.setState({ date })}
        />
        </CardSection>
        <CardSection>
        <Input
          placeholder="Time"
          label = "time"
          value={this.state.time}
          onChangeText={time => this.setState({ time })}
        />
        </CardSection>
        </ScrollView>

        <TouchableOpacity

          onPress={() => this.onCreateEvent()}
          >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );

  }


}

export default EventForm;
