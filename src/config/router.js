import React from 'react';
import { StackNavigator } from 'react-navigation';

import SessionFormContainer from '../components/session/sessionFormContainer';
import LandingPage from '../components/landingPage/landingPage';
import LandingPageContainer from '../components/landingPage/landingPageContainer';
import EventIndexContainer from '../components/event/eventIndexContainer';

export const Tabs = StackNavigator({
  SessionForm: {
    screen: SessionFormContainer,
  },
  LandingPage: {
    screen: LandingPageContainer,
  },
  EventIndexContainer: {
    screen: EventIndexContainer,
  }
},
{
  initialRouteName: 'SessionForm',
  headerMode: 'screen'
}
);
