import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>
    
        <Text style={styles.welcome}>
         HOME PAGE
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
});