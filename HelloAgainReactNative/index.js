
/** @format */

//import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import React, {Component} from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail';


const App = () => {
    return (
            // <Text>Hey there!</Text>
            <View style={{ flex: 1 }}>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
    );
};

AppRegistry.registerComponent(appName, () => App);
