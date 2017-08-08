import { combineReducers } from 'redux';
import EventReducer from './EventReducer';
const RootReducer = combineReducers({
  events: EventReducer
});

export default RootReducer;
