import React from 'react';
import { TabNavigator } from 'react-navigation';

import SessionForm from '../components/session/SessionForm';
import LandingPage from '../components/landingPage/LandingPage';

export const Tabs = TabNavigator({
  SessionForm: {
    screen: SessionForm,
  },
  LandingPage: {
    screen: LandingPage,
  },
});
