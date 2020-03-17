

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import '../assets/stylesheets/application.scss';
import flatsReducer from './reducers/flats_reducer';
import selectedflatReducer from './reducers/selectedflat_reducer';
import {logger} from 'redux-logger';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedflat: selectedflatReducer
})
const middlewares = applyMiddleware(logger);

import App from './components/app'


ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)} >
    <App />
  </Provider>,
  document.getElementById('root'));




