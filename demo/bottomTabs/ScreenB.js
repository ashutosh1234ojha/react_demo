import React, { useState } from 'react';
 import {
   Alert,
   Button,
   Modal,
   Pressable,
   StyleSheet,Text, TextInput,ToastAndroid,TouchableOpacity,View,
 } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { NavigationContainer } from '@react-navigation/native';

const ScreenB=({navigation})=>{
  const  onPressHandler=()=>{

   // navigation.navigate('Screen_A')
    // navigation.goBack();
 }
  return(
    <View>
    <Text>Screen B</Text>

    <Pressable onPress={onPressHandler}>
    <Text>Go back to Screen A</Text>
    </Pressable>
    </View>
)

 }

 export default ScreenB;