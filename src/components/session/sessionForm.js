import React, { Component } from 'react';
import axios from 'axios';
import { Facebook } from 'expo';
import { Text, Alert, View, TextInput, TouchableOpacity, StackNavigator, ScrollView } from 'react-native';
import { CardSection, Card, Button, Input } from '../common';
import { fbConfig } from '../../util/host_util';

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

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(name) {
    if (name === 'facebook') {
      this.loginWithFacebook();
    }
  }

  async loginWithFacebook() {
    const { navigate } = this.props.navigation;
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
      permissions: ['public_profile', 'email']
    });

    if (type === 'success') {
      this.props.loginFacebook({type, token});
      navigate('LandingPage');

    }
  }


  render() {
    const { navigate } = this.props.navigation;
    if (this.state.login) {
      return(
        <View style={style.fullPage}>
          <ScrollView scrollEnabled={false} >
            <Text style={style.appTitle}>CityImpact</Text>
            <Card style={style.container}>
              <CardSection>
                <Input
                  onSubmitEditing={this.handleEditComplete}
                  placeholder="example@email.com"
                  label="email"
                />

              </CardSection>
              <CardSection>
                <Input
                  onSubmitEditing={this.handleEditComplete}
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
                  onPress={() => this.handleLogin('facebook')}
                  style={style.facebookStyle}
                  >
                  <Text style={style.facebookText}>Facebook Log In</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </ScrollView>
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
