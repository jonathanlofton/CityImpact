import React from 'react';
import { StackNavigator } from 'react-navigation';

import SessionFormContainer from '../components/session/sessionFormContainer';
import LandingPage from '../components/landingPage/landingPage';
import EventIndexContainer from '../components/event/eventIndexContainer';

export const Tabs = StackNavigator({
  SessionForm: {
    screen: SessionFormContainer,
  },
  LandingPage: {
    screen: LandingPage,
  },
  EventIndexContainer: {
    screen: EventIndexContainer,
  }
});
