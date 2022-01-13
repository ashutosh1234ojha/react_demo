import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Image, Text, Button, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';


export default function Login({navigation}) {
    const [name, setName] = useState('');
    const setData = async () => {
        if (name.length == 0) {
            Alert.alert('Please enter a valid user nameaaaa')
        } else {
            try {
                await AsyncStorage.setItem('UserName', name);
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getData();
      }, [])
  
      const getData=async()=>{
          try{
  
               AsyncStorage.getItem('UserName')
               .then(value=>{
                   if(value!=null){
                    navigation.navigate('Home');
                   }
               })
  
          }catch(error){
  
              console.log(error)
          }
      }

    return <View style={styles.body}>
        <Image style={styles.logo} source={require('../assets/download.jpeg')} />
        <Text style={styles.text}>Async Storage</Text>
        <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(value) => setName(value)} />
        <Button
            color="#841584"
            onPress={setData}
            title="Login"
        />
    </View>
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0080ff"
    },
    logo: {
        height: 100,
        width: 100,
        margin: 20
    },
    text: {
        color: '#ffffff',
        fontSize: 24
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: "#555",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10
    },
    button: {
        color: "#841584",
        width: 500
    }
})