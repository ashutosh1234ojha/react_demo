import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Button, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { SQLite } from 'react-native-sqlite-storage';
// import SQLite from 'react-native-sqlite-2'
// import {SQLite} from 'react-native-sqlite-storage';


var db = SQLite.openDatabase({
    name: 'MainDb',
    location: 'default',

},
    () => { }, error => { console.log(error) }
);


export default function Login({ navigation }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT,Name TEXT, Age INTEGER);"
            )
        })
    }

    const setData = async () => {
        if (name.length == 0 && age.length == 0) {
            Alert.alert('Please enter a valid user name and age')
        } else {
            try {
                // const user = {
                //     Name: name,
                //     Age: age
                // }
                // await AsyncStorage.setItem('UserName', name);
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));

                // await db.transaction((tx) => {
                //     //    await     tx.executeSql("INSERT INTO Users (Name,Age)VALUES ('"+name+"',"+age+")")
                //     //     })
                //     await tx.executeSql("INSERT INTO Users (Name,Age)VALUES (?,?)", [name, age])
                // })

                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
      //  getData();
    }, [])

    const getData = async () => {
        try {

            // AsyncStorage.getItem('UserName')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');
            //         }
            //     })
             db.transaction((tx) => {
                 tx.executeSql("SELECT Name,Age FROM Users", [],
                (tx,results)=>{
                    var len=results.rows.length;
                    if(len>0){
                       
                        navigation.navigate('Home');
                    }
                })
            })

        } catch (error) {

            console.log(error)
        }
    }

    return <View style={styles.body}>
        <Image style={styles.logo} source={require('../assets/images.jpeg')} />
        <Text style={styles.text}>Sqlite</Text>
        <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(value) => setName(value)} />
        <TextInput style={styles.input} placeholder='Enter your Age' onChangeText={(value) => setAge(value)} />

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
        marginTop: 30,
        marginBottom: 10
    },
    button: {
        color: "#841584",
        width: 500
    }
})