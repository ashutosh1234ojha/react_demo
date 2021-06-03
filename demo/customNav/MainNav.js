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

 import ScreenA from './ScreenA'
 import ScreenB from './ScreenB'

 const Stack=createStackNavigator()

const  MainNav=() =>{
    return (
        <NavigationContainer>
        <Stack.Navigator 
       //   screenOptions={{
       //     header:()=>null
       // }}
       >
        <Stack.Screen 
        name="Screen_A"
        component={ScreenA}
        options={{
            header:()=>null
        }}/>

        <Stack.Screen 
        name="Screen_B"
        component={ScreenB}/>
        </Stack.Navigator>
        </NavigationContainer>
    )

}

export default MainNav;