
 import React, { useState } from 'react';
 import {
   Alert,
   Button,
   Modal,
   Pressable,
   StyleSheet,Text, TextInput,ToastAndroid,TouchableOpacity,View,
 } from 'react-native';
import CustomButton from './CustomButton';

const MainComponent=()=>{

    const [name,setName]=useState('');
    const [submitted,setSubmitted]=useState(false);
    const [displayWaring,setDisplayWarning]=useState(false)
    const onPressHandler=()=>{
      if(name.length<3){
setDisplayWarning(true)
ToastAndroid.show('Greater than 3',ToastAndroid.SHORT)
      }else{
        setSubmitted(!submitted);
      }

    }
    return (
        <View style={style.body}>
       
    
        <Text style={style.text}>Please enter some text sdf</Text>
        <TextInput style={style.textInput} placeholder='Jhon' 
        onChangeText={(value=>setName(value))}/>
        <CustomButton
        onPressFun={onPressHandler}
        title={submitted ?"Clear":"PressMy"}
        />

        <CustomButton
        onPressFun={onPressHandler}
        title={submitted ?"Clean":"Dabao"}
        />
       
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
  
      
  }  ,
  warningBody:{
    width:300,
    height:300,
    backgroundColor:'#ffffff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:'#000',
    borderRadius:20
  },
  centerView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000099'
  },
  warningButton:{
    // width: '100%',
    // height: 50,
    //     flexDirection:'column',
    // flex: 1,
    // justifyContent: 'flex-end',
    // backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, 

  }
        
  });
  export default MainComponent;