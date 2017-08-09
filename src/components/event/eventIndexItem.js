import React from 'react';
import { CardSection } from '../common';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { event } = this.props;

    return(
      <CardSection>
        <Text>{event.title}</Text>
        <Text>{event.description}</Text>
      </CardSection>
    );

  }

}

export default EventIndexItem;
