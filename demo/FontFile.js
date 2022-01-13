import React, { useState } from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const FontFile = ({ navigation, route }) => {

//   const { ItemName, ItemId } = route.params;
//   const onPressHandler = () => {

//     // navigation.navigate('Screen_B')
//     // navigation.replace('Screen_B')
//     //Hello world 

//   }
  return (
    <View>
      <Text style={styles.text1}>Screen A is my new screeen</Text>
      <Text style={styles.text}>Ashtuosh</Text>

     

    </View>
  )

}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f0ff8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'JosefinSans-Regular'
  },
  text1: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'JosefinSans-Thin'
  }
});

export default FontFile;

