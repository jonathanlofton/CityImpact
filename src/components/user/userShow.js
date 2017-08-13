import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const { user } = this.props;

    return(
      <View>
        <View style={styles.userInfoPhoto}>
          <Image
          style={styles.userPhoto}
          source={{uri: `${user.avatar}`}}
          />
          <View style={styles.userInfo}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
        </View>
        <View>
          <Text>Events this user is hosting and events they are planning to attend</Text>
        </View>
      </View>
    )
  }
}

export default UserShow;


const styles = StyleSheet.create({
  userShowContainer: {

  },
  userInfoPhoto: {
    flexDirection: 'row',
  },
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  userInfo: {
  }
})
