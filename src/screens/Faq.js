import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';


class Sponsors extends Component {
  state = {
    images: [
      require('../../assets/images/sponsor1.png'),
      require('../../assets/images/sponsor2.png'),
      require('../../assets/images/sponsor3.png'),
      require('../../assets/images/sponsor4.png'),
      require('../../assets/images/sponsor5.png'),
      require('../../assets/images/sponsor6.png'),
      require('../../assets/images/sponsor7.png'),
      require('../../assets/images/sponsor8.png'),
      require('../../assets/images/sponsor9.png'),
      require('../../assets/images/sponsor10.png'),
      require('../../assets/images/sponsor11.png'),
      require('../../assets/images/sponsor12.png'),
      require('../../assets/images/sponsor13.png'),
      require('../../assets/images/sponsor14.png'),
      require('../../assets/images/sponsor15.png'),
      require('../../assets/images/sponsor16.png'),
      require('../../assets/images/sponsor17.png')
    ]
  }

  render() {
    let image = this.state.images.map((img, key) => {
      return (
        <View style={styles.imageWrap} key={key} >
          <Image source={img} style={styles.image} />
        </View>
      )
    })
    return (
      <View style={styles.sponsorContainer}>
        {image}
      </View>
    )
  }
}

class Rules extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Rules</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.faqInfo}>1. All MBA/Post-Graduate teams need to have at least 2 undergraduate students on their teams. This is so important that we’ll say it twice, in bold. ALL MBA/Post-Grad teams need to have at least 2 undergraduate students on their teams.</Text>
          <Text style={styles.faqInfo}>2. Teams may have up to 6 members.</Text>
          <Text style={styles.faqInfo}>3. When you check-in, you’ll be given a name tag. Do not lose this nametag! This is how we ID you for food, workshops, and all other programming. Wear this name tag at all times.</Text>
          <Text style={styles.faqInfo}>4. Please be respectful of the space and property and the people you interact with. We have a very large Executive team and will gladly help you through the course of the event. However, improper use of space or disrespect towards people can result in disqualification from the competition.</Text>
          <Text style={styles.faqInfo}>5. With an event as large as HackATL, we want to be conscious of our impact to the environment. There are colored bins on all floors. Please dispose waste accordingly.</Text>
        </View>
      </View>
    )
  }
}

class CodeOfConduct extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Code of Conduct</Text>
      </View>
    )
  }
}

class Prizes extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Prizes</Text>
        <Image style={styles.prizes} source={require('../../assets/images/prizes.png')} />
      </View>
    )
  }
}

class Transporation extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Transporation and Parking</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.faqInfo}> - If you are flying in—please book tickets for Hartsfield Jackson International Airport. We recommend using rideshare, not public transport, to arrive to Goizueta Business School (1300 Clifton Rd, Atlanta, GA 30322).</Text>
          <Text style={styles.faqInfo}> - If you choose to drive, please park in the Law School parking Deck. Parking is free after 4PM here.</Text>
          <Text style={styles.faqInfo}> - Another Option is Fishburne Parking Deck (15 Fishburne Ln, Atlanta, GA 30307). This parking deck is located right behind the Goizueta Business School. Parking is free after 6PM and on weekends.</Text>
        </View>
      </View>
    )
  }
}

class Packing extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Packing</Text>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.subcontentTitle}>Suggested Packing List:</Text>
            <View style={styles.subcontentContainer}>
              <Text style={styles.faqInfo}>1. Laptop and charger</Text>
              <Text style={styles.faqInfo}>2. Notepad and stationery </Text>
              <Text style={styles.faqInfo}>3. Phone charger</Text>
              <Text style={styles.faqInfo}>4. Clothes and toiletries - there are showers in the business school. If you plan on staying overnight and have not booked hotel accommodation for yourself, feel free to bring a sleeping bag and a pillow! We’ll have security 24/7 in the b-school so you can stay there overnight. If you are flying and are unable to bring sleeping arrangements, EEVM can provide sleeping bags that you can check out for the night for free; just email us at hackatl@eevm.org to reserve a sleeping bag. Most of our participants camp out at the business school.</Text>
              <Text style={styles.faqInfo}>5. Snacks - if you have dietary limitations. We’ve attached a tentative food menu in the packet below for your reference.</Text>
            </View>
            <View>
              <Text style={styles.subcontentTitle}>Do Not Bring</Text>
              <Text style={styles.faqInfo}>Alcohol or drugs, if an airplane won’t allow it we probably won’t.</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

class Wifi extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Wifi</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.faqInfo}> - Emory Students: Please connect to EmoryUnplugged as you would normally with your student accounts.</Text>
          <Text style={styles.faqInfo}> - Guests: Please try registering with the eduroam network first. You should be able to sign up using your university .edu address to gain access.</Text>
          <Text style={styles.faqInfo}> - Please contact our tech support desk in Coca-Cola Commons (basement of the business school) in case of any issues and they will be happy to assist you. They are arguably better than Geek Squad.</Text>
        </View>
      </View>
    )
  }
}

class Print extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Print</Text>
      </View>
    )
  }
}

class Sleep extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Sleep</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.faqInfo}>You may choose to find your own accommodations near Emory, stay at a friend’s place or AirBnB in Atlanta, or sleepover at the venue. If you plan to stay overnight, please let us know at hackatl@eevm.org so we can make sure we get you sleeping bags (free of charge).</Text>
        </View>
      </View>
    )
  }
}

class Shower extends Component {
  render() {
    return (
      <View>
        <Text style={styles.faqTitle}>Shower</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.faqInfo}>Showers can be located in the business school.</Text>
        </View>
      </View>
    )
  }
}

class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About HackATL'
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.faqTitle}>Sponsors</Text>
          <Sponsors />
        </View>

      </ScrollView>
    )
  }
}

class RulesScreen extends Component {
  static navigationOptions = {
    title: 'Rules'
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <Rules />
        </View>

      </ScrollView>
    )
  }
}

class PackingScreen extends Component {
  static navigationOptions = {
    title: 'Packing'
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <Packing />
        </View>

      </ScrollView>
    )
  }
}

class WifiScreen extends Component {
  static navigationOptions = {
    title: 'Wifi'
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <Wifi />
        </View>

      </ScrollView>
    )
  }
}

class SleepScreen extends Component {
  static navigationOptions = {
    title: 'Sleep & Hygiene'
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <Sleep />
        </View>

        <View>
          <Shower />
        </View>

      </ScrollView>
    )
  }
}

class PrizesScreen extends Component {
  static navigationOptions = {
    title: 'Prizes'
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        
        <View>
          <Prizes />
        </View>

      </ScrollView>
    )
  }
}

class GeneralScreen extends Component {
  static navigationOptions = {
    title: 'Transportation'
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Transporation />
        </View>

       

      </ScrollView>
    )
  }
}

class SplashScreen extends Component {
  static navigationOptions = {
    title: "FAQ"
  }
  render() {
    let { navigate } = this.props.navigation;
    return (
      // <SafeAreaView style={styles.splashContainer}>
      <ScrollView >
        <View style={styles.splashContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate("About")} style={styles.button}>
            <Text style={styles.buttonText}>Sponsors</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate("General")} style={styles.button}>
            <Text style={styles.buttonText}>Transportation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate("Prizes")} style={styles.button}>
            <Text style={styles.buttonText}>Prizes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate("Rules")} style={styles.button}>
            <Text style={styles.buttonText}>Rules</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate("Packing")} style={styles.button}>
            <Text style={styles.buttonText}>Packing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate("Wifi")} style={styles.button}>
            <Text style={styles.buttonText}>Wifi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate("Sleep")} style={styles.button}>
            <Text style={styles.buttonText}>Sleep & Hygiene</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>

      // </SafeAreaView>
    )
  }
}

const Faq = createStackNavigator(
  {
    Splash: SplashScreen,
    About: AboutScreen,
    General: GeneralScreen, 
    Rules: RulesScreen, 
    Prizes: PrizesScreen,
    Packing: PackingScreen,
    Wifi: WifiScreen,
    Sleep: SleepScreen, 
  }
)

export default Faq


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  faqTitle: {
    fontFamily: 'Gotham-Book',
    color: '#8b7ab3',
    marginLeft: 10,
    marginTop: 20,
    fontSize: 28,
    padding: 0
  },
  sponsorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  imageWrap: {
    flexDirection: 'row',
    width: 100,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: 175
  },
  contentContainer: {
    margin: 20
  },
  faqInfo: {
    fontFamily: 'Gotham-Book',
    marginBottom: 5,
    fontSize: 16
  },
  prizes: {
    height: 500,
    width: null,
    resizeMode: 'center'
  },
  subcontentContainer: {
    marginLeft: 10
  },
  subcontentTitle: {
    fontFamily: 'Gotham Medium',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },
  buttonContainer: {
    justifyContent: 'center',
    width: '90%'
  }, 
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(199,186,219)',
    paddingVertical: 30,
    marginBottom: 20,
    borderRadius: 15
  },
  buttonText: {
    fontFamily: 'Gotham-Light',
    fontSize: 18
  }
});
