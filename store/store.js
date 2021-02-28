import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import initialState from './initialState';

const initialState = {
    data: data,
  };



createStore(rootReducer, initialState, applyMiddleware(thunk));
