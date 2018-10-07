/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  TouchableOpacity,
  Button,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        {/* <Button 
          title = "Go to Agenda" 
          color = "#841584" 
          onPress = {() => navigate("Agenda")} 
        >
        </Button> */}

        <TouchableOpacity onPress={() => navigate('Agenda')}>
          <Text style={styles.button}>Go to agenda</Text>
        </TouchableOpacity>

        <Button
          title="Go to Faq"
          color="green"
          onPress={() => navigate('Faq')}
        />

        <Button title="Go to Inbox" onPress={() => navigate('Inbox')} />

        <Button title="Go to Map" onPress={() => navigate('Map')} />

        <Button title="Go to Pitch" onPress={() => navigate('Pitch')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    fontSize: 36,
    color: 'orange',
    marginBottom: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
