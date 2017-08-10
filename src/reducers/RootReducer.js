import { combineReducers } from 'redux';
import EventReducer from './EventReducer';
import SessionReducer from './session_reducer'

const RootReducer = combineReducers({
  events: EventReducer,
  session: SessionReducer
});

export default RootReducer;
