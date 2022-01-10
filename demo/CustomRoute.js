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




 const Stack=createStackNavigator()



 function screenA({navigation}){
    const  onPressHandler=()=>{

       // navigation.navigate('Screen_B')
        navigation.replace('Screen_B')

    }
     return(
         <View>
         <Text>Screen A</Text>
         <Pressable onPress={onPressHandler}>
         <Text>Go to Screen B</Text>
         </Pressable>
         </View>
     )
 }

 function screenB({navigation}){
    const  onPressHandler=()=>{

       // navigation.navigate('Screen_A')
       navigation.goBack();
    }
    return(
        <View>
        <Text>Screen B its beauty</Text>

        <Pressable onPress={onPressHandler}>
        <Text>Go back to Screen A</Text>
        </Pressable>
        </View>
    )
}

 function  CustomRoute() {
     return (
         <NavigationContainer>
         <Stack.Navigator 
        //   screenOptions={{
        //     header:()=>null
        // }}
        >
         <Stack.Screen 
         name="Screen_A"
         component={screenA}
         options={{
             header:()=>null
         }}/>

         <Stack.Screen 
         name="Screen_B"
         component={screenB}/>
         </Stack.Navigator>
         </NavigationContainer>
     )

 }

 export default CustomRoute;