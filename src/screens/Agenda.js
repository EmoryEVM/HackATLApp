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
    title: "Description"
  };
  render() { 
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

      <ScrollView>


      <View style={styles.descContainer}> 

      <Text style={styles.descPageTitle}> Workshop Descriptions </Text>

        <View style={styles.descContainerInside}>
          <View style={styles.eventDetails}> 
            <Text style={styles.descTitle}> IDEATION </Text>
            <Text style={styles.descHost}> Design Bloc </Text>
            <Text style={styles.descText}>This workshop is intended to help you identify problems and
solutions to those problems when you’re developing your
HackATL idea. Whether you’re a seasoned hackathoner
or a newcomer, we recommend going to this workshop. </Text>
          </View> 
          </View>

          <View style={styles.descContainerInside}>
          <View style={styles.eventDetails}> 
            <Text style={styles.descTitle}> UX 101 </Text>
            <Text style={styles.descHost}> Facebook </Text>
            <Text style={styles.descText}>Now that you have your idea, you need to make it a
reality! As an entrepreneur, you want your product to be
user-friendly and well-designed. This workshop will give you
the skills to turn your idea into a product with the best user
experience possible. </Text>
          </View> 
          </View>

          <View style={styles.descContainerInside}>
          <View style={styles.eventDetails}> 
            <Text style={styles.descTitle}> DESIGN STRATEGY </Text>
            <Text style={styles.descHost}> Sun Trust </Text>
            <Text style={styles.descText}> Design strategy is the marriage between great marketing strategy
and flawless design execution. Come get the insider scoop on
how to elevate your idea with this workshop by SunTrust. </Text>
          </View> 
          </View>

          <View style={styles.descContainerInside}>
          <View style={styles.eventDetails}> 
            <Text style={styles.descTitle}> PITCH PERFECT </Text>
            <Text style={styles.descHost}> Excellerator </Text>
            <Text style={styles.descText}>Now that you’ve got your product, you need to sell it! Come by
Excellerator’s Pitch Perfect pitch practice to get feedback on
your pitching skills from investors and industry insiders. </Text>
          </View> 
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
          <Text style={styles.timeStyle}>5:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> HackATL Kickoff </Text>
            <Text style={styles.locationTitle}> Patterson Green </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>6:30PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Logistics Presentation </Text>
            <Text style={styles.locationTitle}> Jenkin's Courtyard </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>7:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Dinner </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Ideation Workshop </Text>
            <Text style={styles.locationTitle}> GBS 208 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>8:45PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Category Breakout </Text>
            <Text style={styles.locationTitle}> *Refer to Agenda* </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>12:00AM</Text>
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
            <Text style={styles.agendaTitle}> Blockchain Workshop </Text>
            <Text style={styles.locationTitle}> GBS 301 </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>11:00AM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> UX 101 Workshop </Text>
            <Text style={styles.locationTitle}> GBS 301 </Text>
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
          <Text style={styles.timeStyle}>2:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Strategy Workshop </Text>
            <Text style={styles.locationTitle}> GBS 301 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>2:30PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Snacks </Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
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
          <Text style={styles.timeStyle}>9:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Pitch Perfect Workshop </Text>
            <Text style={styles.locationTitle}> GBS 130 </Text>
          </View> 
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>12:00AM</Text>
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
            <Text style={styles.locationTitle}> *Refer to Agenda* </Text>
          </View>
        </View> 

        <View style={styles.eventContainer}> 
          <Text style={styles.timeStyle}>1:00PM</Text>
          <View style={styles.eventDetails}> 
            <Text style={styles.agendaTitle}> Lunch</Text>
            <Text style={styles.locationTitle}> Coke Commons </Text>
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
      screen: Fri,
      navigationOptions: {
        tabBarLabel: 'Fri',
      }
    },
    2: {
      screen: Sat,
      navigationOptions: {
        tabBarLabel: 'Sat',
      }
    },
    3: {
      screen: Sun,
      navigationOptions: {
        tabBarLabel: 'Sun',
      }
    }, 
    4: {
      screen: Pre,
      navigationOptions: {
        tabBarLabel: 'Desc.',
      }
    },
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
  descContainer: {

    flexDirection: "column",
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center'
  },
  descHost: {
    marginBottom: 5, 
    fontFamily: 'Gotham-Light',
    color: '#444',

  },
  descContainerInside: {

    marginTop: 20, 
    width: '90%', 
  },
  agendaTitle: {
    flex: 2,
    backgroundColor: '#fff',
    fontSize: 18,
    marginBottom:5,
  }, 
  descTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 3, 
  },
  descText: {
    fontSize: 14,
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
  descPageTitle: {
    fontFamily: 'Gotham-Light',
    color: '#8b7ab3',
    fontWeight: 'bold',
    fontSize: 20
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




