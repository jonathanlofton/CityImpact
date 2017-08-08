import React from 'react';
import { StackNavigator } from 'react-navigation';

import SessionForm from '../components/session/sessionForm';
import LandingPage from '../components/landingPage/landingPage';

export const Tabs = StackNavigator({
  SessionForm: {
    screen: SessionForm,
  },
  LandingPage: {
    screen: LandingPage,
  },
});
