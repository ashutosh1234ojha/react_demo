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
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Appp = () => {
  const [name, setName]=useState('Ashu')
  const [session, setSession]=useState({number:6,title:'as'})
  const [count, setCount]=useState(0)


 const clickListener=()=>{
  setName('ojha')
  setSession({number:7,title:'our'})
  setCount(count=>count+1)
  }
  return (<View style={style.body}>
    <Text style={style.text}>{name}</Text>
    <Text style={{color:'#f05f80',fontSize:34}}>Tom</Text>
    <Text style={style.text}>This is number {session.number} and text is {session.title}</Text>
    <Text style={style.text}>Count is {count} </Text>
    <Button title='click' onPress={clickListener}></Button>

  </View>);
};

const style=StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#f0ff8f',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    flex:1,
    color:'#00f000',
    fontSize:30,
    margin:14,
    borderColor:'#fff34f',
    borderWidth:3,
    textTransform:'uppercase'


      }
});
export default Appp;
