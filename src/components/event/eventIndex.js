import React from 'react';
import { ListView, ScrollView } from 'react-native';
import EventIndexItem from './eventIndexItem';
import { Card } from '../common';

class EventIndex extends React.Component {


  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    console.log(this.props);
    if (this.props.events.length === 0) {
      return null;
    }
    const { events } = this.props;

    const allEvents =
      events.map((event, i) => (
        <EventIndexItem key={`event-${i}`}
          navigator={this.props.navigation}
          requestSingleEvent={this.props.requestSingleEvent}
          event={event}/>
      ));

    return (
      <Card>
        <ScrollView>
          {allEvents}
        </ScrollView>
      </Card>
    );
  }
}

export default EventIndex;
