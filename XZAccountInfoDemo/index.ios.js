/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import XZAccountInfoScene from '../app/XZAccountInfoScene.js'

export default class XZAccountInfoDemo extends Component {
  render() {
    return (
        <Navigator

            initialRoute={{title:'帐号信息',component:XZAccountInfoScene}}
            renderScene={(route,navigator) => {
                return <route.componet {...route} navigator={navigator}>
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('XZAccountInfoDemo', () => XZAccountInfoDemo);
