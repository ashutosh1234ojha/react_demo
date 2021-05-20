/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   Button,
     ImageBackground,
   StyleSheet,
   Text,
   View,Image
 } from 'react-native';
 
 
 const CustomImage = () => {
  var url= 'http://m.gettywallpapers.com/wp-content/uploads/2020/02/HD-Cristiano-Ronaldo-Wallpapers.jpg'
   return (<ImageBackground style={styles.body} source={require('./assets/images.jpeg')}>
   
   <Image style={styles.imageView} source={require('./assets/download.jpeg')}/>

   <Image source={{uri:'http://m.gettywallpapers.com/wp-content/uploads/2020/02/HD-Cristiano-Ronaldo-Wallpapers.jpg'}}/>

  

   </ImageBackground>);
 };
 
 const styles=StyleSheet.create({
   body:{
     flex:1,
     justifyContent: 'center',
     alignItems:'center',
   },
   imageView:{
    width:200,
    height:200,
    alignItems:'center',
    justifyContent: 'center',

  
    backgroundColor:'#3C1434',
},


 });
 export default CustomImage;
 