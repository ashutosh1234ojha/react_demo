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

const ScreenA=({navigation})=>{
    const  onPressHandler=()=>{

        // navigation.navigate('Screen_B')
         navigation.replace('Screen_B')
 
     }
    return(
        <View>
        <Text>Screen A is my new screeen</Text>
        <Pressable onPress={onPressHandler}>
        <Text>Go to Screen B</Text>
        </Pressable>
        </View>
    )

 }

 export default ScreenA;