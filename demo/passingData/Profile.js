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
 

const Profile=({navigation,route})=>{

  const {ItemName,ItemId}=route.params;
    const  onPressHandler=()=>{

        // navigation.navigate('Screen_B')
        // navigation.replace('Screen_B')
        //Hello world 
 
     }
    return(
        <View>
        <Text>Screen A is my new screeen</Text>
        <Pressable onPress={onPressHandler}>
        <Text>Go to Setting</Text>
        </Pressable>

        <Text>Value  comming  from Setting {ItemName} </Text>
        </View>
    )

 }

 export default Profile;