import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import SessionFormContainer from '../components/session/sessionFormContainer';
import LandingPage from '../components/landingPage/landingPage';
import EventFormContainer from '../components/landingPage/eventFormContainer';
import LandingPageContainer from '../components/landingPage/landingPageContainer';
import EventIndexContainer from '../components/event/eventIndexContainer';
import EventShowPageContainer from '../components/event/eventShowPageContainer';
import UserShowContainer from '../components/user/userShowContainer';
import InitialScreenContainer from '../components/initialScreen/initialScreenContainer';

const LandingNavigator = StackNavigator({
  LandingPage: {
    screen: LandingPageContainer,
    navigationOptions: {
      header: null
    }
  },

  EventIndexContainer: {
    screen: EventIndexContainer,
  },
  EventForm: {
    screen: EventFormContainer,
  },
  EventShowPage: {
    screen: EventShowPageContainer,
  },
  UserShowContainer: {
    screen: UserShowContainer,
  },
  SessionForm: {
    screen: SessionFormContainer,
    navigationOptions: {
      header: null
    }
  },
},
{
  initialRouteName: 'LandingPage',
  headerMode: 'screen'
});

export const SessionNavigator = StackNavigator({
  SessionForm: {
    screen: SessionFormContainer,

  },

  LandingPage: {
    screen: LandingNavigator,
  },

  InitialScreen: {
    screen: InitialScreenContainer
  }
},
{
  initialRouteName: 'InitialScreen',
  headerMode: 'none'
}
);
