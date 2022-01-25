import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Test from './Test';


const MyStack=createStackNavigator()

const Base = () => {
    
    return (<NavigationContainer>
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
        </NavigationContainer>);
  };
  export default Base;