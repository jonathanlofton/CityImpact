import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Input, Card, CardSection } from '../common';

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
      latitude: this.props.navigation.state.params.longitude
    };

  }

  onCreateEvent() {
    this.props.navigation.state.params.createEvent({
      title: this.state.title,
      description: this.state.description
    });
  }

  render() {

    return(
      <View>
        <Input
          placeholder="Name of Event"
          label = "title"

        />
      </View>
    );

  }


}

export default EventForm;
