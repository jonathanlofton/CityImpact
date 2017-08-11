import React from 'react';
import { StackNavigator } from 'react-navigation';

import SessionFormContainer from '../components/session/sessionFormContainer';
import LandingPage from '../components/landingPage/landingPage';
import EventForm from '../components/landingPage/eventForm';
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
  },
  EventForm: {
    screen: EventForm,
  }
},
{
  initialRouteName: 'SessionForm',
  headerMode: 'screen'
}
);
