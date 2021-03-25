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
 
 
 const MyFlex = () => {
 
   return (<View style={styles.body}>
   
  <View style={styles.parent1}>
  <View style={styles.view1}><Text style={{color:'#ffffff'}}>1</Text></View>
  <View style={styles.view2}><Text style={{color:'#ffffff'}}>2</Text></View>
  <View style={styles.view3}><Text  style={{color:'#ffffff'}} >3</Text></View>
  </View>
  <View style={styles.parent2}></View>
  <View style={styles.parent3}></View>

  <View style={styles.parent4}>
  <View style={styles.view4}><Text style={{color:'#ffffff'}}>4</Text></View>
  <View  style={styles.view5}><Text  style={{color:'#ffffff'}}>5</Text></View>

  </View>


   </View>);
 };
 
 const styles=StyleSheet.create({
   body:{
     flex:1,
   },
   parent1:{   
    backgroundColor:'#20ff8f',
    flexDirection:'row',
    height:50


},
parent2:{   
    height:50,
 backgroundColor:'#FFFF00',


},
parent3:{   
    height:50,
 backgroundColor:'#3FFF00',


},
parent4:{   
    flex:1,
 backgroundColor:'#3FFF00',
 flexDirection:'row',



},
   view1:{
       flex:1,
  
       backgroundColor:'#6C1433',
      alignItems:'center',
      justifyContent: 'center',

      
       height:50,
   },
   view2:{
    flex:2,
    height:50,
    alignItems:'center',
    justifyContent: 'center',

  
    backgroundColor:'#3C1434',
},
view3:{
    flex:3,
    height:50,
    alignItems:'center',
    justifyContent: 'center',

    backgroundColor:'#DC1435',
},
view4:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#9e9e00',
},
view5:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#000000',
}

 });
 export default MyFlex;
 