
import React, { Component } from 'react'
import {
  TouchableOpacity,
  Button,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View, 
  Image, 
  ScrollView
} from 'react-native'
import firebase from 'react-native-firebase';



class Sponsors1 extends Component {
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

class Sponsors2 extends Component {
  state = {
    images: [

      require('../../assets/images/sponsor11.png'),
      require('../../assets/images/sponsor12.png'),
      require('../../assets/images/sponsor13.png'),
      require('../../assets/images/sponsor14.png'),
      require('../../assets/images/sponsor15.png'),
      require('../../assets/images/sponsor16.png'),
      require('../../assets/images/sponsor17.png'),
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


class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor() {
    super();
    this.ref = firebase.firestore().collection('todos');
    this.state = {
        textInput: '',
    };
  }

  addTodo() {
    this.ref.add({
      title: 'hello',
      complete: true,
    });
  }

  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView>
          <View> 
            <Sponsors1/>
          </View>
        <View style={styles.logoWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.logo}
              source={require('../assets/HackATL2018Logo.png')}
            />

          </View>

          {/*<Text style={styles.dateText} >Oct 26-28 2018</Text>*/}
        </View>

        <View> 
          <Sponsors2/>
        </View>

        </ScrollView>
      </View>


    )
  }


}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  button: {
    fontSize: 36,
    color: 'orange',
    marginBottom: 20
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
    marginBottom: -20

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
  },
  imageWrapper: {
    flexDirection: 'column',
    width: '90%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrap: {
    flexDirection: 'row',
    width: 50,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: -30
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: 125
  },
    sponsorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  dateText:{
    fontSize: 24, 
    fontWeight: 'bold',
  },
})
