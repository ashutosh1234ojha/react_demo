
 import React, { useState } from 'react';
 import {
   StyleSheet,Text, TextInput,View,
 } from 'react-native';

const MyInputField=()=>{

    const [name,setName]=useState('');
    return (
        <View style={style.body}>
        <Text style={style.text}>Please enter some text</Text>
        <TextInput style={style.textInput} placeholder='Jhon' 
        onChangeText={(value=>setName(value))}/>
        <Text style={style.text}>{name}</Text>

        </View>

        );

};

const style=StyleSheet.create({
    body:{
      flex:1,
      backgroundColor:'#f0ff8f',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',

      

    },
    text:{
      color:'#00f000',
      fontSize:30,
      margin:14
        },
     textInput:{
         width:200,
         borderColor:'#000000',
         borderWidth:1,
         textAlign:'center',




     }   
        
  });
  export default MyInputField;