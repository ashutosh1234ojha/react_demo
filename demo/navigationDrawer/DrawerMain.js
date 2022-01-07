import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

 import ScreenA from './ScreenA'
 import ScreenB from './ScreenB'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer=createDrawerNavigator()


const  DrawerMain=() =>{
    return (
        <NavigationContainer>
        <Drawer.Navigator>
      <Drawer.Screen name="ScreenA" component={ScreenA} />
      <Drawer.Screen name="ScreenB" component={ScreenB} />
    </Drawer.Navigator>
        </NavigationContainer>
    )

}

export default DrawerMain;

