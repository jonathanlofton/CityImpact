import React from 'react';
import EventIndexItem from './eventIndexItem';

class EventIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    const { events } = this.props;
    const allEvents =
      events.map((event, id) => (<EventIndexItem key={`event-${id}`} event={event}/>));

    // return (
    // );
  }
}

export default EventIndex;
