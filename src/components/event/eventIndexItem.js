import React from 'react';
import { CardSection } from '../common';
import { Text } from 'react-native';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { event } = this.props;
    console.log(event);
    return(
      <CardSection>
        <Text>{event.title}</Text>
        <Text>{event.description}</Text>
      </CardSection>
    );

  }

}

export default EventIndexItem;
