  
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ChatScreen from '../screens/ChatScreen';
import AddFriendScreen from '../screens/AddFriendScreen';

export const AppTabNavigator = createBottomTabNavigator({
    ChatScreen : {
        screen : ChatScreen,
        navigationOptions : {
            tabBarLabel : "Send Text",
        }
    },
    AddFriendScreen : {
        screen : AddFriendScreen,
        navigationOptions : {
            tabBarLabel : "Add New Friend",
        }
    }
})