import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CardSection, Card, Button, Input } from '../common'

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      login: true
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.login) {
      return(
        <View style={style.container}>
          <CardSection>
            <TouchableOpacity
              onPress={() => navigate('LandingPage')}
              style={style.buttonStyle}
              >
              <Text>Guest Login</Text>
            </TouchableOpacity>
          </CardSection>
        </View>
      );
    }
  }
}

export default SessionForm;
<Button
  title="go to maps"
  onPress={() => navigate('LandingPage')}
  />

  const style = {
    buttonStyle: {
      alignSelf: 'center',
      borderRadius: 3,
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#00AB6C',
      margin: 10,
      height: 60,
      width: '70%'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    }
  };
