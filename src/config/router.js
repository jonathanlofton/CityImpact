import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import SessionFormContainer from '../components/session/sessionFormContainer';
import LandingPage from '../components/landingPage/landingPage';
import EventFormContainer from '../components/landingPage/eventFormContainer';
import LandingPageContainer from '../components/landingPage/landingPageContainer';
import EventIndexContainer from '../components/event/eventIndexContainer';
import EventShowPage from '../components/event/eventShowPage';
import UserShowContainer from '../components/user/userShowContainer';

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
    screen: EventShowPage,
  },
  UserShowContainer: {
    screen: UserShowContainer,
  }
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
},
{
  initialRouteName: 'SessionForm',
  headerMode: 'none'
}
);
