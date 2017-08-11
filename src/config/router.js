import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import SessionFormContainer from '../components/session/sessionFormContainer';
import LandingPage from '../components/landingPage/landingPage';
import EventForm from '../components/landingPage/eventForm';
import LandingPageContainer from '../components/landingPage/landingPageContainer';
import EventIndexContainer from '../components/event/eventIndexContainer';

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
    screen: EventForm,
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
