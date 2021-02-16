import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SingUpScreen';
import test from './screens/test';
import { NativeAppEventEmitter } from 'react-native';
import { AppTabNavigator } from './components/AppTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
   
      <AppContainer />
   
  );
}


var AppNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  //BottomTab: {screen: AppTabNavigator }
  SignupScreen : {screen: SignupScreen},
  Drawer : {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppNavigator)



