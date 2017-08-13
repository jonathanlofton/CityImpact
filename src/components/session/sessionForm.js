import React, { Component } from 'react';
import axios from 'axios';
import { Facebook, Google } from 'expo';
import { Text, Alert, View, TextInput, TouchableOpacity, StackNavigator, ScrollView } from 'react-native';
import { CardSection, Card, Button, Input } from '../common';
import { fbConfig, googleConfig } from '../../util/host_util';
import { NavigationActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

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
    this.reset = this.reset.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleLogin(name) {
    if (name === 'facebook') {
      this.loginWithFacebook();
    } else {
      this.loginWithGoogle();
    }
  }

  handleDemoLogin() {
    const {navigate} = this.props.navigation;
    this.props.receiveCurrentUser({
      avatar: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/13254315_998838910199317_9012571467113931512_n.jpg?oh=5aa7280a8ca9aa86f084c12cf1974c95&oe=5A31CD74",
      email: "mbegur@hawk.iit.edu",
      id: "5990b719ce7c7d0004b57892",
      name: "Mallik Begur"
    })
    this.reset();
  }

  reset(){
    return this.props.navigation.dispatch(NavigationActions.reset(
      {
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'LandingPage'})
        ]
      }));
  }

  async loginWithFacebook() {
    const { navigate } = this.props.navigation;
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
      permissions: ['public_profile', 'email']
    });

    if (type === 'success') {
      Alert.alert(
        `Welcome!`, null, null,
        { cancelable: false }
      );
      this.props.loginUser({provider: 'facebook', token});
      this.reset();
    }
  }

  async loginWithGoogle() {
    const { navigate } = this.props.navigation;
    try {
      const {type, accessToken} = await Google.logInAsync({
        iosClientId: googleConfig.CLIENT_ID_IOS,
        scopes: ['profile', 'email']
      });

      if (type === 'success') {
        Alert.alert(
          `Welcome!`,
          null, null,
          { cancelable: false }
        );
        this.props.loginUser({provider: 'google', token: accessToken});
        this.reset();
      }
    } catch (e) {
      Alert.alert(
        `Oops! something went wrong, please try again`,
        null, null,
        { cancelable: false }
      );
    }
  }


  render() {
    console.log(this.props.navigation);
    const { navigate } = this.props.navigation;
    if (this.state.login) {
      return(
        <View style={style.container}>
            <View style={style.sessionContent}>
              <Text style={style.appTitle}>CityImpact</Text>
              <View style={style.buttons}>
                <TouchableOpacity
                  onPress={() => this.handleDemoLogin()}
                  style={style.guestStyle}
                  >
                  <Text style={style.guestText}>Guest Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleLogin('google')}
                  style={style.googleStyle}
                  >
                  <Text style={style.googleText}>Google Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleLogin('facebook')}
                  style={style.facebookStyle}
                  >
                  <Text style={style.facebookText}>Facebook Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      );
    }
  }
}

export default SessionForm;

  const style = {
    guestStyle: {
      alignSelf: 'center',
      borderRadius: 3,
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#81b71a',
      margin: 10,
      height: 60,
      width: '70%'
    },
    guestText: {
      alignSelf: 'center',
      color: '#81b71a',
      fontSize: 20,
      padding: 15
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
    googleStyle: {
      alignSelf: 'center',
      borderRadius: 3,
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#d34836',
      margin: 10,
      height: 60,
      width: '70%'
    },
    googleText: {
      alignSelf: 'center',
      color: '#d34836',
      fontSize: 20,
      padding: 15
    },
    appTitle: {
      fontSize: 40,
      fontWeight: '500',
      textAlign: 'center',
      marginBottom: '10%',
    },
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  };

  // <TouchableOpacity
  //   onPress={() => navigate('LandingPage')}
  //   style={style.buttonStyle}
  //   >
  //   <Text style={style.buttonText}>Guest Log In</Text>
  // </TouchableOpacity>
