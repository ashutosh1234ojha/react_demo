import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useState} from 'react';
import {
  Button,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MyStack=createStackNavigator()


const ScreenOne=({navigation})=>{

    const navigateToScreen=()=>{
        navigation.navigate('ScreenOne22')
    }


    return (<View>
    <Text>ScreenOne</Text>
    <Pressable onPress={navigateToScreen}>
    <Text>Go to screen Twoo</Text>
    </Pressable>
    </View>);
}

function ScreenTwo({navigation}) {
    const navigateBack=()=>{
        navigation.goBack();
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Pressable onPress={navigateBack}>
    <Text>Go Back</Text>
    </Pressable>
      </View>
    );
  }

const HomeScreen = () => {
    
    return (<NavigationContainer>
        <MyStack.Navigator  initialRouteName="ScreenOne11">
        <MyStack.Screen
        name='ScreenOne22'
        component={ScreenTwo}
        />
        <MyStack.Screen
        name='ScreenOne11'
        component={ScreenOne}
        options={{header:()=>null}}
        />
       
        
        </MyStack.Navigator>
        </NavigationContainer>);
  };

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#f0ff8f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#00f000',
      fontSize: 30,
      margin: 14
  
    }
  });
  export default HomeScreen;