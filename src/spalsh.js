/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class splash extends Component {
  componentWillMount() {
     {
            setInterval(()=> {
               this
                     .props
                     .navigator
                     .push('home' );
            }, 2000);
       }
}
static navigationOptions={
header:null,
};
  render() {
    // var width=Dimensions
    // .get('window')
    // .width;

    return (
    <View style={styles.container}>
      <Image 
       source={require('./images/splash.png')}
      style={{
        height: 150,
        width:150
    
      }}
      
     
      />
        <Text style={styles.welcome}>
          NOTIFICATION SYSTEM
        </Text>
        <Text style={styles.instructions}>
          Let's get started.
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
      alignItems: 'center',
    // fontSize:24,
     backgroundColor:'#0000A0'
   
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
  color:'#ffffff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('App',() =>rewindcapsdev);