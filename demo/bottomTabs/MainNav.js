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


 import ScreenA from './ScreenA'
 import ScreenB from './ScreenB'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


 const Tab=createBottomTabNavigator()

const  MainNav=() =>{
    return (
        <NavigationContainer>
        <Tab.Navigator
        screenOptions={(route)=>({
            tabBarIcon:({focused,size,color})=>{
                let iconName='btc';
                if(route.name==='Screen_A'){
                    iconName='comments';

                }else if(route.name==='Screen_B'){
                    iconName='git' ;

                }
                return (<FontAwesome5 name={iconName} brand />)
            }
        }
            
        )}>
        <Tab.Screen 
        name="Screen_A"
        component={ScreenA}
    />

        <Tab.Screen 
        name="Screen_B"
        component={ScreenB}/>
        </Tab.Navigator>
        </NavigationContainer>
    )

}

export default MainNav;