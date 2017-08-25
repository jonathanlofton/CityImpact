import React, { Component } from 'react';
import axios from 'axios';
import { Facebook, Google } from 'expo';
import { Text, Alert, View, TextInput, Image, TouchableOpacity, StackNavigator, ScrollView } from 'react-native';
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


  componentWillMount() {
    const { navigate } = this.props.navigation;

    if (this.props.currentUser) {
      navigate('LandingPage')
    }
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
    const { navigate } = this.props.navigation;
    if (this.props.currentUser) {
      return (
        <View style={style.container}>
          <View style={style.sessionContent}>
            <Text style={style.appTitle}>CityImpact</Text>
            <Text style={{alignSelf: 'center'}}>You're already logged in, go:</Text>
          <TouchableOpacity
            onPress={() => this.reset()}
            style={style.guestStyle}
            >
            <Text style={style.guestText}>Back to App</Text>
          </TouchableOpacity>
        </View>
        </View>
      )
    }
    if (this.state.login) {
      return(
          <Image
            source={{uri: 'http://res.cloudinary.com/jlofton/image/upload/v1502687383/backgroundCity_fgcr8y.jpg'}}
            style={style.background}
            >
            <View style={style.sessionContent}>
              <Text style={style.appTitle}>CityImpact</Text>
              <View style={style.buttons}>
                <TouchableOpacity
                  onPress={() => this.handleDemoLogin()}
                  style={[style.buttonStyle, style.guestStyle]}
                  >
                  <Text style={[style.buttonText, style.guestText]}>Guest Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleLogin('google')}
                  style={[style.buttonStyle, style.googleStyle]}
                  >
                  <Text style={[style.buttonText, style.googleText]}>Google Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handleLogin('facebook')}
                  style={[style.buttonStyle, style.facebookStyle]}
                  >
                  <Text style={[style.buttonText, style.facebookText]}>Facebook Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Image>
      );
    }
  }
}

export default SessionForm;

  const style = {
    background: {
      flex: 1,
      width: null,
      height: null,
    },
    sessionContent: {
      marginTop: '50%',
    },
    buttonStyle: {
      alignSelf: 'center',
      borderRadius: 3,
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      margin: 10,
      height: 60,
      width: '70%'
    },
    buttonText: {
      alignSelf: 'center',
      fontSize: 20,
      padding: 15,
      color: 'white'
    },
    guestStyle: {
      backgroundColor: '#81b71a',
      borderColor: '#81b71a',
    },
    facebookStyle: {
      backgroundColor: '#3b5998',
      borderColor: '#3b5998',
    },
    googleStyle: {
      backgroundColor: '#d34836',
      borderColor: '#d34836',
    },
    appTitle: {
      backgroundColor: 'transparent',
      fontSize: 40,
      color: 'white',
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: '10%',
    },
  };

  // <TouchableOpacity
  //   onPress={() => navigate('LandingPage')}
  //   style={style.buttonStyle}
  //   >
  //   <Text style={style.buttonText}>Guest Log In</Text>
  // </TouchableOpacity>
