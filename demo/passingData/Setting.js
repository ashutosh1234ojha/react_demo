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

const Setting=({navigation})=>{
  const  onPressHandler=()=>{

   navigation.navigate('Profile',{ItemName:'Ashutosh',ItemId:12})
    // navigation.goBack();
 }
  return(
    <View>
    <Text>Screen B</Text>

    <Pressable onPress={onPressHandler}>
    <Text>Go to Profile</Text>
    </Pressable>
    </View>
)

 }

 export default Setting;