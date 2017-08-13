import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import RootReducer from '../reducers/RootReducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    compose(applyMiddleware(thunk), autoRehydrate())
  );
};

export default configureStore;
