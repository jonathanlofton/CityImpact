import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TextInput, Card, CardSection } from '../common';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      time: "",
      date: "",
      location: ""
    };

  }

  onCreateEvent() {
    this.props.createEvent({
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
