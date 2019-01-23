/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return(
    <Provider store={createStore(reducers)}>
      <ScrollView style={{ flex: 1 }}>
        <Header headerText='Tech Stack'/>
        <LibraryList />

      </ScrollView>
    </Provider>
    
  );
};

export default App;