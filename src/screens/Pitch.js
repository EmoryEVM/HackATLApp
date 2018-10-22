/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import {
  Button,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default class Pitch extends Component {
  static navigationOptions = {
    title: 'Pitch'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.pressHandler}
          title="button"
          style={[styles.button, styles.purpleOne]}
        >
          <Text style={styles.buttonText}>
            Judging Rubric and Additional Information
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.pressHandler}
          title="button"
          style={[styles.button, styles.purpleTwo]}
        >
          <Text style={styles.buttonText}>Submit Team Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.pressHandler}
          title="button"
          style={[styles.button, styles.purpleBlue]}
        >
          <Text style={styles.buttonText}>Submit Pitch Deck</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.pressHandler}
          title="button"
          style={[styles.button, styles.blueOne]}
        >
          <Text style={styles.buttonText}>Pitch Time & Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.pressHandler}
          title="button"
          style={[styles.button, styles.blueTwo]}
        >
          <Text style={styles.buttonText}>Live Results Update</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    width: '80%',
    height: '15%',
    backgroundColor: '#FFF0',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleOne: {
    backgroundColor: '#c7bbdb'
  },
  purpleTwo: {
    backgroundColor: '#c5c3e0'
  },
  purpleBlue: {
    backgroundColor: '#c2d1e9'
  },
  blueOne: {
    backgroundColor: '#bfdbf0'
  },
  blueTwo: {
    backgroundColor: '#bbe6f7'
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    width: '60%',
    textAlign: 'center'
  }
})
