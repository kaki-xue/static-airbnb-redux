

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import '../assets/stylesheets/application.scss';
import flatsReducer from './reducers/flats_reducer';
import selectedflatReducer from './reducers/selectedflat_reducer';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedflat: selectedflatReducer
})

import App from './components/app'


ReactDOM.render(
  <Provider store={createStore(reducers)} >
    <App />
  </Provider>,
  document.getElementById('root'));




