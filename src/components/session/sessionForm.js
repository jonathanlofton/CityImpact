import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StackNavigator } from 'react-native';
import { CardSection, Card, Button, Input } from '../common';

class SessionForm extends Component {

  static navigationOptions = {
      title: 'Session Form',
    };

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
              onPress={this.props.facebookAuth}
              style={style.buttonStyle}
              >
              <Text style={style.buttonText}>Guest Log In</Text>
            </TouchableOpacity>

            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="password"
              />
            </CardSection>

            <View style={style.buttons}>
              <TouchableOpacity
                onPress={() => navigate('LandingPage')}
                style={style.buttonStyle}
                >
                <Text style={style.buttonText}>Guest Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate('LandingPage')}
                style={style.facebookStyle}
                >
                <Text style={style.facebookText}>Facebook Log In</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      );
    }
  }
}

export default SessionForm;

  const style = {
    buttons: {
      marginTop: 50,
    },
    facebookStyle: {
      alignSelf: 'center',
      borderRadius: 3,
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#3b5998',
      margin: 10,
      height: 60,
      width: '70%'
    },
    facebookText: {
      alignSelf: 'center',
      color: '#3b5998',
      fontSize: 20,
      padding: 15
    },
    fullPage: {
      backgroundColor: 'white',
      height: "100%",
    },
    appTitle: {
      fontSize: 40,
      fontWeight: '500',
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',
      margin: 50,
    },
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
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
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
