import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import LoginForm from './components/LoginForm';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAbO2F3wThzesj8gmnS6ll7EuI38K5CKlI",
      authDomain: "manager-e90fb.firebaseapp.com",
      databaseURL: "https://manager-e90fb.firebaseio.com",
      projectId: "manager-e90fb",
      storageBucket: "manager-e90fb.appspot.com",
      messagingSenderId: "241086231680"
    };
    firebase.initializeApp(config);

  }
  render()
  {
    const store = createStore(reducers , {}, applyMiddleware(ReduxThunk));
    return(
        <Provider store={store}>
          <Router />
        </Provider>
    );
  }
}

export default App;