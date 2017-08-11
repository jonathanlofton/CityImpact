import { combineReducers } from 'redux';
import EventReducer from './EventReducer';
import SessionReducer from './sessionReducer'

const RootReducer = combineReducers({
  events: EventReducer,
  session: SessionReducer
});

export default RootReducer;
