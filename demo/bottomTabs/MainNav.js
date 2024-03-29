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
        screenOptions={({route})=>({
            tabBarIcon:({focused,size,color})=>{
                let iconName;
                if(route.name==='Screen_A'){
                    iconName='comments';
                    size=focused?25:20;
                    color=focused ?'#FFC0CB':'	#4B0082'

                }else if(route.name==='Screen_B'){
                    iconName='git' ;
                    size=focused?25:20;
                    color=focused ?'#FFC0CB':'	#4B0082'



                }
                return (<FontAwesome5 name={iconName}  size={size} color={color} />)
            }
        }
            
        )}
        tabBarOptions={{
            activeTintColor:'#FFC0CB',
            inactiveTintColor:'#4B0082',
            activeBackgroundColor:'	#FFD700',
            inactiveBackgroundColor:'#ADFF2F',
            showLabel:false,
            labelStyle:{fontSize:14}

        }}
        
        >
        <Tab.Screen 
        name="Screen_A"
        component={ScreenA}
        options={{tabBarBadge:3}}
    />

        <Tab.Screen 
        name="Screen_B"
        component={ScreenB}/>
        </Tab.Navigator>
        </NavigationContainer>
    )

}

export default MainNav;