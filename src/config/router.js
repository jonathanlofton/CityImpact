import React from 'react';
import { StackNavigator } from 'react-navigation';

import SessionForm from '../components/session/SessionForm';
import LandingPage from '../components/landingPage/LandingPage';

export const Tabs = StackNavigator({
  SessionForm: {
    screen: SessionForm,
  },
  LandingPage: {
    screen: LandingPage,
  },
});
