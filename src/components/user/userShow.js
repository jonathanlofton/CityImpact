import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const { currentUser } = this.props;

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
          style={styles.userPhoto}
          source={{uri: `${currentUser.avatar}`}}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{currentUser.name}</Text>
          <Text style={styles.email}>{currentUser.email}</Text>
        </View>
        <View style={styles.events}>
          <Text style={{textAlign: 'center'}}>Events this user is hosting and events they are planning to attend</Text>
        </View>
      </View>
    )
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
    width: '80%',
    justifyContent: 'center',
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
