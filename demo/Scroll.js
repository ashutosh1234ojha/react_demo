/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   StyleSheet,
   View,Text, ScrollView,
 } from 'react-native';
 
 
 const Scroll = () => {
     const [Items,setItems]=useState([
         {key:1,item:'item 1'},
         {key:2,item:'item 2'},
         {key:3,item:'item 3'},
         {key:4,item:'item 3'},
         {key:9,item:'item 3'},
         {key:5,item:'item 3'},
         {key:6,item:'item 3'},
         {key:7,item:'item 3'},
         {key:8,item:'item 3'},
         {key:10,item:'item 3'},
         {key:11,item:'item 31'},
         {key:12,item:'item 33'},
         {key:13,item:'item 34'},
         {key:14,item:'item 35'},
     ])
 
   return (<ScrollView style={styles.body}>
 {
    Items.map((obj)=>{
        return (<View key={obj.key}><Text style={styles.text}>{obj.item}</Text></View>)
    })
 }
   </ScrollView>);
 };
 
 const styles=StyleSheet.create({
   body:{
     flex:1,
     backgroundColor:'#123100'
   },
   text:{
    color:'#ffffff',
    fontSize:24,
    margin:10
  },
 });
 export default Scroll;
 