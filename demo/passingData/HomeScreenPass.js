import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

 import Profile from './Profile'
 import Setting from './Setting'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer=createDrawerNavigator()


const  HomeScreenPass=(navigation) =>{
    return (
        <NavigationContainer>
        <Drawer.Navigator 
      screenOptions={{

        headerShown:true,
        gestureEnabled:true,
        swipeEnabled:true,
        drawerPosition:'right',
  
        
      }}
      overlayColor="#ff0"
      drawerStyle={{backgroundColor:'#00f',width:150}}
          >
      <Drawer.Screen name="Profile" component={Profile} options={{title:"Profile Menu"}} />
      <Drawer.Screen name="Setting" component={Setting} options={{title:"Setting Menu"}}/>
    </Drawer.Navigator>
        </NavigationContainer>
    )

}

export default HomeScreenPass;

