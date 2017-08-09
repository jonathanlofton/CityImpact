import React from 'react';
import { StackNavigator } from 'react-navigation';

import SessionFormContainer from '../components/session/sessionFormContainer';
import LandingPage from '../components/landingPage/landingPage';

export const Tabs = StackNavigator({
  SessionForm: {
    screen: SessionFormContainer,
  },
  LandingPage: {
    screen: LandingPage,
  },
});
