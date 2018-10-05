import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'


class Floor1 extends Component {
  render() {
    return (
      <ScrollView style={styles.floors}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/floor1.png')} style={styles.image} />
        </View>
        <Text style={styles.workspaceStyle}>Available Workspaces</Text>
        <View style={styles.scheduleContainer}>
          <View>
            <Text style={styles.dayStyle}>FRI</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SAT</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SUN</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
} class Floor2 extends Component {
  render() {
    return (
      <ScrollView style={styles.floors}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/floor1.png')} style={styles.image} />
        </View>
        <Text style={styles.workspaceStyle}>Available Workspaces</Text>
        <View style={styles.scheduleContainer}>
          <View>
            <Text style={styles.dayStyle}>FRI</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SAT</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SUN</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class Floor3 extends Component {
  render() {
    return (
      <ScrollView style={styles.floors}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/floor1.png')} style={styles.image} />
        </View>
        <Text style={styles.workspaceStyle}>Available Workspaces</Text>
        <View style={styles.scheduleContainer}>
          <View>
            <Text style={styles.dayStyle}>FRI</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SAT</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SUN</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class Floor4 extends Component {
  render() {
    return (
      <ScrollView style={styles.floors}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/floor1.png')} style={styles.image} />
        </View>
        <Text style={styles.workspaceStyle}>Available Workspaces</Text>
        <View style={styles.scheduleContainer}>
          <View>
            <Text style={styles.dayStyle}>FRI</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SAT</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SUN</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class Floor5 extends Component {
  render() {
    return (
      <ScrollView style={styles.floors}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/floor1.png')} style={styles.image} />
        </View>
        <Text style={styles.workspaceStyle}>Available Workspaces</Text>
        <View style={styles.scheduleContainer}>
          <View>
            <Text style={styles.dayStyle}>FRI</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SAT</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
          <View>
            <Text style={styles.dayStyle}>SUN</Text>
            <Text style={styles.timeStyle}>3:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>4:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
            <Text style={styles.timeStyle}>5:00PM-11:00PM</Text>
            <Text style={styles.roomStyle}>100, 200, 300, 400, 500, 600, 800, 900, 901, 902</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const Map = createMaterialTopTabNavigator(
  {
    1: {
      screen: Floor1,
      navigationOptions: {
        tabBarLabel: 'Floor 1',
      }
    },
    2: {
      screen: Floor2,
      navigationOptions: {
        tabBarLabel: 'Floor 2',
      }
    },
    3: {
      screen: Floor3,
      navigationOptions: {
        tabBarLabel: 'Floor 3',
      }
    },
    4: {
      screen: Floor4,
      navigationOptions: {
        tabBarLabel: 'Floor 4',
      }
    },
    5: {
      screen: Floor5,
      navigationOptions: {
        tabBarLabel: 'Floor 5',
      }
    }
  }, {
    tabBarOptions: {
      activeTintColor: '#8b7ab3',
      inactiveTintColor: '#000',
      style: {
        backgroundColor: '#FFF',
      },
      indicatorStyle: {
        backgroundColor: '#8b7ab3'
      },
      tabStyle: {
      }
    },
  }
);

export default Map

const styles = StyleSheet.create({
  floors: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    resizeMode: 'center',
    width: '100%',
    height: 250,
  },
  workspaceStyle: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Gotham Medium',
    textAlign: 'center',
    marginBottom: 10,
  },
  scheduleContainer: {
    marginBottom: 15
  },
  dayStyle: {
    fontFamily: 'Gotham Medium',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5
  },
  timeStyle: {
    fontFamily: 'Gotham-Light',
    color: '#8b7ab3'
  },
  roomStyle: {
    fontFamily: 'Gotham-Light',
    marginBottom: 10
  }
})