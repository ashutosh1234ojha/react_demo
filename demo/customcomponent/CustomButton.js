import React, { useState } from 'react';
import {
    Alert,
    Button,
    Modal,
    Pressable,
    StyleSheet,Text, TextInput,ToastAndroid,TouchableOpacity,View,
  } from 'react-native';

const CustomButton=(props)=>{
return(
    <TouchableOpacity style={style.button}  onPress={props.onPressFun}>
        <Text style={style.text}>{props.title}</Text>
        </TouchableOpacity>
);
}

export default CustomButton;

const style=StyleSheet.create({
    body:{
      flex:1,
      backgroundColor:'#f0ff8f',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
 
     button:{
       margin:16,
      width:200,
      backgroundColor:'#DC143C',
      alignItems:'center',  
  },
  text:{
    color:'#00f000',
    fontSize:30,
    margin:14
      },
        
  });