import React, { useState } from 'react';
 import {
   Alert,
   Button,
   Modal,
   Pressable,
   StyleSheet,Text, TextInput,ToastAndroid,TouchableOpacity,View,
 } from 'react-native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//  import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import { NavigationContainer } from '@react-navigation/native';


 import ScreenA from './ScreenA'
 import ScreenB from './ScreenB'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();

//  const Tab=createBottomTabNavigator()
const Tab=createMaterialBottomTabNavigator()


const  MaterialBottomTab=() =>{
    return (
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Screen_A" component={ScreenA} />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
      </NavigationContainer>

    )

}

export default MaterialBottomTab;