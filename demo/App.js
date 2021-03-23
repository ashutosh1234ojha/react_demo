/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (<View style={style.body}>
    <Text style={style.text}>Hello ashutosh</Text>
    <Button title='click' onPress={()=>{Linking.openURL('https://reactnative.dev/docs/environment-setup')}}></Button>

  </View>);
};

const style=StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#f0ff8f',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:'#00f000',
    fontSize:30,
    margin:14

      }
});
export default App;
