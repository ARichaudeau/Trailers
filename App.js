/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import TrailerList from './TrailerList';
import TrailerDetail from './TrailerDetail';

// class App extends React.Component{
//   render() {
//     return (
//       <AppContainer/>
//     );
//   }
// }

const AppNavigator = createStackNavigator({
  Home: {
      screen: TrailerList,
  },
  Details: {
      screen: TrailerDetail,
  },
}, {
  initialRouteName: 'Home',
});

//const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(AppNavigator);