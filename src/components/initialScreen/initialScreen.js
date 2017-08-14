import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

class InitialScreen extends Component {
  constructor(props) {
    super(props);
  }

  reset() {
    if (this.props.currentUser) {
      return this.props.navigation.dispatch(NavigationActions.reset(
        {
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'LandingPage'})
          ]
        }));
    } else {
      return this.props.navigation.dispatch(NavigationActions.reset(
        {
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'SessionForm'})
          ]
        }));
    }

  }

  componentWillMount() {
    const { navigate } = this.props.navigation;
    this.reset();
  }

  render() {
    return null;
  }
}

export default InitialScreen;
