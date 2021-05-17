
 import React, { useState } from 'react';
 import {
   Button,
   StyleSheet,Text, TextInput,TouchableOpacity,View,
 } from 'react-native';

const MyInputField=()=>{

    const [name,setName]=useState('');
    const [submitted,setSubmitted]=useState(false);
    const onPressHandler=()=>{
setSubmitted(!submitted);
    }
    return (
        <View style={style.body}>
        <Text style={style.text}>Please enter some text</Text>
        <TextInput style={style.textInput} placeholder='Jhon' 
        onChangeText={(value=>setName(value))}/>
          <Button style={style.button} title={submitted ?"clear":"Click"} onPress={onPressHandler}/>
        <TouchableOpacity style={style.button} title={submitted ?"clear":"Click"} onPress={onPressHandler}>
        <Text style={style.text}>{submitted ?'clear':'Click'}</Text>
        </TouchableOpacity>
        {submitted ?<Text style={style.text}>{name}</Text>:null
      }
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
         width:400,
         borderColor:'#000000',
         borderWidth:1,
         textAlign:'center',
     }  ,
     button:{
       margin:16,
      width:200,
      backgroundColor:'#DC143C',
      alignItems:'center',
  
      
  }  
        
  });
  export default MyInputField;