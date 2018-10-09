/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './src/screens/Home';
import Agenda from './src/screens/Agenda';
import Faq from './src/screens/Faq';
import Inbox from './src/screens/Inbox';
import Map from './src/screens/Map';
import Pitch from './src/screens/Pitch';


//This is the first page the app goes to, but this holds all the screens
//and then navigates to the first one
const Navigation = createBottomTabNavigator(
  {
    Home:{
      screen:Home
    },
    Agenda:{
      screen:Agenda
    },
    Faq:{
      screen:Faq
    },
    // Inbox:{
    //   screen:Inbox
    // },
    Map:{
      screen:Map
    },
    Pitch:{
      screen:Pitch
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Agenda') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)

export default Navigation