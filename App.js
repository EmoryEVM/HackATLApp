/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator } from 'react-navigation';
import {Button, AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

import Home from './src/screens/Home';
import Agenda from './src/screens/Agenda';
import Faq from './src/screens/Faq';
import Inbox from './src/screens/Inbox';
import Map from './src/screens/Map';
import Pitch from './src/screens/Pitch';


//This is the first page the app goes to, but this holds all the screens
//and then navigates to the first one
const Navigation = StackNavigator({
  Home:{
    screen:Home
  },
  Agenda:{
    screen:Agenda
  },
  Faq:{
    screen:Faq
  },
  Inbox:{
    screen:Inbox
  },
  Map:{
    screen:Map
  },
  Pitch:{
    screen:Pitch
  }
}) 

export default Navigation