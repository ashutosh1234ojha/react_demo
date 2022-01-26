import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './Login';
import Home from './Home';
import { View, StyleSheet, Image, Text, Button, Alert } from "react-native";
import { Provider } from 'react-redux';
import { Store } from './Store';

const MyStack=createStackNavigator()

const BaseRedux = () => {
    
    return (<Provider store={Store}>
      <NavigationContainer>
        <MyStack.Navigator  initialRouteName="Login">
        <MyStack.Screen
        name='Login'
        component={Login}
        options={{headerShown:false}}
        />
        <MyStack.Screen
        name='Home'
        component={Home}
        options={{headerShown:false}}

        />
       
        
        </MyStack.Navigator>
        </NavigationContainer>
      </Provider>

      
        );
  };
  export default BaseRedux;

