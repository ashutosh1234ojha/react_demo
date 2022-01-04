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
   View,Text, ScrollView, RefreshControl,FlatList,
 } from 'react-native';
 
 
 const MyFlatList = () => {
     const [Items,setItems]=useState([
         {name:'item 1111'},
         {name:'item 211'},
         {name:'item 1'},
     ])

     const [Refreshing,setRefreshing]=useState(false);
     const  onRefresh=()=>
     {
       setRefreshing(true);
       setItems([...Items,{name:'Item  69'}]);
       setRefreshing(false);
     }
 
   return (<FlatList 
    refreshControl={<RefreshControl
      refreshing={Refreshing}
      onRefresh={onRefresh}/>}
    keyExtractor={(item,index)=>index}
    data={Items}
    renderItem={({item})=>(<View  style={styles.body}><Text style={styles.text}>{item.name}</Text></View>)}
    />);
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
 export default MyFlatList;
 