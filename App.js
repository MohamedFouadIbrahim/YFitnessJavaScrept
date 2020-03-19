import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import MainNAvigate from './navigation';
import Reduser from "./Src/Redusers/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reduser, {}, applyMiddleware(ReduxThunk))} >
        <MainNAvigate />
      </Provider>
    )
  }
}