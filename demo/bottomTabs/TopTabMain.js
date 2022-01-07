import React, { useState } from 'react';
 import {
   Alert,
   Button,
   Modal,
   Pressable,
   StyleSheet,Text, TextInput,ToastAndroid,TouchableOpacity,View,
 } from 'react-native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer } from '@react-navigation/native';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


 import ScreenA from './ScreenA'
 import ScreenB from './ScreenB'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createMaterialTopTabNavigator();

const  TopTabMain=() =>{
    return (
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen 
        name="Screen_A"
        component={ScreenA}/>

        <Tab.Screen 
        name="Screen_B"
        component={ScreenB}/>
        </Tab.Navigator>
        </NavigationContainer>
    )

}

export default TopTabMain;