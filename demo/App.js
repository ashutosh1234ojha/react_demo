/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  const link=() => {
    mySetstate(mycount=>mycount+1)
   // Linking.openURL('https://en.wikipedia.org/wiki/Yelp')
  }
const [mycount, mySetstate] = useState(0)
  return (<View style={styles.body}>
    <Text style={styles.text}>Hello ashutosh</Text>
    <Text style={styles.text}>My Current Count is {mycount}</Text>
    <Button title='click'
      onPress={link

      }></Button>

  </View>);
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f0ff8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00f000',
    fontSize: 30,
    margin: 14

  }
});
export default App;
