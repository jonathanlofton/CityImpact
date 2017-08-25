import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import EventIndexItem from '../event/eventIndexItem';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const { currentUser, hostedEvents } = this.props;
    const allEvents =
      hostedEvents.map((event, id) => (<EventIndexItem key={`event-${id}`} navigator={this.props.navigation} event={event}/>));

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
          style={styles.userPhoto}
          source={{uri: `${currentUser.avatar}`}}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{currentUser.fullName}</Text>
          <Text style={styles.email}>{currentUser.email}</Text>
        </View>
        <Text style={{textAlign: 'center', fontSize: '18', fontWeight: '20', marginTop: 10}}>Events Your Hosting</Text>
        <View style={styles.events}>
          <ScrollView>
            {allEvents}
          </ScrollView>

        </View>
      </View>
    );
  }
}

export default UserShow;


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    margin: '10%',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  email: {
    color: 'grey',
    textAlign: 'center'
  },
  events: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '60%',
  },
  userPhoto: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  userInfo: {
    marginBottom: '5%',
  }
})
