import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    console.log(this.props)
    return(
      <View>
        <View style={styles.userInfoPhoto}>
          <Image
          style={styles.userPhoto}
          source={{uri: 'https://res.cloudinary.com/jlofton/image/upload/v1502515774/catstockphoto_yr81pv.jpg'}}
          />
          <View style={styles.userInfo}>
            <Text>User Name</Text>
            <Text>User email</Text>
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
