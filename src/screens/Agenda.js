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
          <Text style={styles.timeStyle}>9/27</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Web Development Workshop</Text>
            <Text style={styles.locationTitle}> GBS 208 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>10/11</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> App Development Workshop</Text>
            <Text style={styles.locationTitle}> GBS 334 </Text>
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
          <Text style={styles.timeStyle}> 4:30PM </Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Early Bird Check In</Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>5:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Check In </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>6:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Keynote </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>6:45PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> HackATL Directors Intro </Text>
            <Text style={styles.locationTitle}> Jenkin's Courtyard </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>7:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Dinner & Co-founder Networking </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Stage 1: Ideation Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:45PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Division Split: Industry Discussion </Text>
            <Text style={styles.locationTitle}> TBA </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>11:30PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Midnight Snacks </Text>
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
          <Text style={styles.timeStyle}>10:00AM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Stage 2: Business Modeling </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>11:00AM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Work Time </Text>
            <Text style={styles.locationTitle}> Everywhere </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>12:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Lunch </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>1:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Stage 2: Prototyping </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>2:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Work Time </Text>
            <Text style={styles.locationTitle}> Everywhere </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>3:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Snack Break </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>4:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Stage 3: VC & Monetization </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>5:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Work Time </Text>
            <Text style={styles.locationTitle}> Everywhere </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>6:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Dinner </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View> 
        </View>

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Stage 4: How to Pitch </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>10:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Red Bull Hour </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>11:30PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Midnight Snacks </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
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
          <Text style={styles.timeStyle}>8:00AM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Breakfast </Text>
            <Text style={styles.locationTitle}>Coke Commons </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>9:00AM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> First Round Pitches </Text>
            <Text style={styles.locationTitle}> TBA </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>1:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Judges Deliberation</Text>
            <Text style={styles.locationTitle}> - </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>1:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Lunch & HackATL Fair </Text>
            <Text style={styles.locationTitle}> Jenkin's Courtyard </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>2:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Final Round Pitches </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>3:30PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Closing Ceremony </Text>
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
    paddingTop: 20
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




