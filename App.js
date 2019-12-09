/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root, Toast } from "native-base";
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';

import { connect, Provider } from "react-redux";
import Routes from './src/components/Router';
import Store from './src/utils/store'
// import { Actions, Router, Scene } from "react-native-router-flux";

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
         <Provider store={Store}>
            <Root>
              <Routes/>
            </Root>
          </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});