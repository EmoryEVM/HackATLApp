/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator } from 'react-navigation';
import {Button, AppRegistry, ScrollView, Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'


class Pre extends Component {
  static navigationOptions = {
    title: "Agenda"
  };
  render() { 
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>


      <ScrollView>
        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>7:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Web Development Workshop</Text>
            <Text style={styles.locationTitle}> GBS 208 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>7:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Workshop 2 - Mobile App Development</Text>
            <Text style={styles.locationTitle}> GBS 334 </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>7:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Dinner and Networking</Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Team Building Scavenger Hunt </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>10:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Celebration </Text>
            <Text style={styles.locationTitle}> Everywhere </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>11:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Late Night Snacks </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 
       </ScrollView>


      </View>

    );
  }
}


class Fri extends Component {
  static navigationOptions = {
    title: "Agenda"
  };
  render() { 
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>


      <ScrollView>
        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>5:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Check In </Text>
            <Text style={styles.locationTitle}> Goizetta Business School Arches </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>6:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Keynote Speech </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>7:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Dinner and Networking</Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Team Building Scavenger Hunt </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 
       </ScrollView>


      </View>

    );
  }
}


class Sat extends Component {
  static navigationOptions = {
    title: "Agenda"
  };
  render() { 
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>


      <ScrollView>
        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00AM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Breakfast </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>1:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Workshop </Text>
            <Text style={styles.locationTitle}> GBS W500 </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>4:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Meet and Greet</Text>
            <Text style={styles.locationTitle}> Everywhere </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Team Building Scavenger Hunt </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 
       </ScrollView>


      </View>

    );
  }
}


class Sun extends Component {
  static navigationOptions = {
    title: "Agenda"
  };
  render() { 
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>


      <ScrollView>
        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>5:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Check In </Text>
            <Text style={styles.locationTitle}> Goizetta Business School Arches </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>6:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Keynote Speech </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>7:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Dinner and Networking</Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Team Building Scavenger Hunt </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Google Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 
       </ScrollView>


      </View>

    );
  }
}


const AgendaNavigator = createMaterialTopTabNavigator(
  {
    1: {
      screen: Pre,
      navigationOptions: {
        tabBarLabel: 'Pre',
      }
    },
    2: {
      screen: Fri,
      navigationOptions: {
        tabBarLabel: 'Fri',
      }
    },
    3: {
      screen: Sat,
      navigationOptions: {
        tabBarLabel: 'Sat',
      }
    },
    4: {
      screen: Sun,
      navigationOptions: {
        tabBarLabel: 'Sun',
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

export default class Agenda extends Component {
  static navigationOptions = {
    title: "Agenda"
  };
  render() {
    var { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.safeArea}>
        <AgendaNavigator />
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  floors: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  eventContainer: {
    height: 50,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  agendaTitle: {
    flex: 2,
    backgroundColor: '#fff',
    fontSize: 18,
  }, 
  eventDetails: {
    flex: 3,
  },
  locationTitle: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontSize: 14,
    // alignSelf: 'center'
  },
  timeStyle: {
    flex: 1,
    fontFamily: 'Gotham-Light',
    color: '#8b7ab3',
    textAlign: "center", 
    alignSelf: 'center',
  },
  roomStyle: {
    fontFamily: 'Gotham-Light',
    marginBottom: 10
  }
})




