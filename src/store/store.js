import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/RootReducer';

const configureStore = (preloadedState = {}) => {
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
