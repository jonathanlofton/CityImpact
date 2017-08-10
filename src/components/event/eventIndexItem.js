import React from 'react';
import { CardSection } from '../common';
import { Text, View, Image, StyleSheet } from 'react-native';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { event } = this.props;
    console.log(event);
    return(
      <View style={styles.cardSection}>
        <View style={styles.information}>
          <Text style={styles.title}>{event.title}</Text>
          <Text>Description: {event.description}</Text>
          <Text>Location: Your moms house</Text>
        </View>
        <View style={styles.photo}>
          <Image
          style={{width: 100, height: 100}}
          source={{uri: 'http://res.cloudinary.com/jlofton/image/upload/v1502388682/jungle_qlctue.jpg'}}
        />
        </View>
      </View>
    );

  }

}

export default EventIndexItem;


const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '900',
  },
  cardSection: {
    width: '100%',
    borderBottomWidth: 1,
    height: 120,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'

  },
  information: {
    flex: 1,
  },
  photo: {
    marginLeft: 10,
    width: 100,
    height: 100,
  },
});
