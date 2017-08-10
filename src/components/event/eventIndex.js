import React from 'react';
import { ListView } from 'react-native';
import EventIndexItem from './eventIndexItem';
import { Card } from '../common';

class EventIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    console.log(this.props);
    if (!this.props.events) {
      return null;
    }
    const { events } = this.props;

    const allEvents =
      events.map((event, id) => (<EventIndexItem key={`event-${id}`} event={event}/>));

    return (
      <Card>
        {allEvents}
      </Card>
    );
  }
}

export default EventIndex;
