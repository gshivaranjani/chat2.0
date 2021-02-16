import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import chatScreen from '../screens/ChatScreen';
import {AppTabNavigator} from './AppTabNavigator';
import FrendsList from './FriendsList';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator
    },
    
},

{
    contentComponent : FrendsList
},
{
    initialRouteName : 'ChatScreen'
})