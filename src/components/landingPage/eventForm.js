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
    this.navigateEventShowPage = this.navigateEventShowPage.bind(this);
  }


  navigateEventShowPage(res) {
    // const { navigate } = this.props.navigation
    const { navigate } = this.props.navigation;
    // const { res } = this.props;
    console.log(res);
    navigate('EventShowPage', {title: res.event.data.event.title,
     latitude: res.event.data.event.latitude,
     longitude: res.event.data.event.longitude,
     description: res.event.data.event.description,
     time: res.event.data.event.time,
     date: res.event.data.event.date
    });

  }

  onCreateEvent() {
    this.props.navigation.state.params.createEvent({
      title: this.state.title,
      description: this.state.description,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      date: this.state.date,
      time: this.state.time,
    }).then((res) => this.navigateEventShowPage(res), (err) => console.log(err));

  }

  render() {
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
