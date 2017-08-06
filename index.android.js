import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackHandler
} from 'react-native';
import {Provider} from 'react-redux'
import store from './src/store/index'
import App from './src/components/App'

export default class pationtTracker extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <App/>
        </Provider>
      </View>
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
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('pationtTracker', () => pationtTracker);
