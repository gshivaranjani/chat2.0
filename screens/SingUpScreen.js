import { Alert, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import React,{Component} from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import SampleScreen from './SampleScreen';
import test from './test';
import { AppDrawerNavigator } from '../components/AppDrawerNavigator';
import WelcomeScreen from './WelcomeScreen';

export default class SingUpScreen extends Component {
    


    render() {
        return(
            <AppContainer />
        )
    }
}

var AppNavigator = createSwitchNavigator({
    SampleScreen:SampleScreen,
    Drawer : AppDrawerNavigator,
    WelcomeScreen : WelcomeScreen
  })
  
  const AppContainer = createAppContainer(AppNavigator)



