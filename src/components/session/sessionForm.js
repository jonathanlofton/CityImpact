import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StackNavigator } from 'react-native';
import { CardSection, Card, Button, Input } from '../common';

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
        <Card>
          <CardSection>
            <Input
              placeholder="example@email.com"
              label="email"
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="password"
            />
          </CardSection>
          <CardSection>
            <TouchableOpacity
              onPress={() => navigate('LandingPage')}
              style={style.buttonStyle}
              >
              <Text style={style.buttonText}>Guest Log In</Text>
            </TouchableOpacity>
            </CardSection>
        </Card>
      );
    }
  }
}

export default SessionForm;

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
      alignItems: 'center',
    },
    buttonText: {
      alignSelf: 'center',
      color: '#00AB6C',
      fontSize: 20,
      padding: 15
    }
  };

  // <TouchableOpacity
  //   onPress={() => navigate('LandingPage')}
  //   style={style.buttonStyle}
  //   >
  //   <Text style={style.buttonText}>Guest Log In</Text>
  // </TouchableOpacity>
