import { View, StyleSheet, Text, Button, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TextInput } from 'react-native-gesture-handler';
// import SQLite from 'react-native-sqlite-2'
import { SQLite } from 'react-native-sqlite-storage';




var db = SQLite.openDatabase({
    name: 'MainDb',
    location: 'default',

},
    () => { }, error => { console.log(error) }
);


export default function Home({ navigation }) {
    const [name, setName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userName, setUserName] = useState('');


    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Please enter a valid user nameaaaa')
        } else {
            try {
                await AsyncStorage.setItem('UserName', name);
                const user={
                    Name:name,
                    Age:userAge
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                Alert.alert('User name  update successfully')
            } catch (error) {
                console.log(error);
            }
        }
    }

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Delete",
            "User Remove Successfully",
            [

                {
                    text: "OK", onPress: () => {
                        navigation.navigate('Login')

                        navigation.ba
                    }
                }
            ]
        );

    const removeData = async () => {


        try {
            AsyncStorage.getItem('UserName')
                .then(value => {
                    if (value != null) {
                        AsyncStorage.removeItem('UserName');
                        createTwoButtonAlert()
                    }
                })

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {

            // AsyncStorage.getItem('UserName')
            //     .then(value => {
            //         if (value != null) {
            //             setName(value)
            //         }
            //     })
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             let user=JSON.parse(value);
            //             setUserAge(user.Age)
            //             setUserName(user.Name)

            //         }
            //     })
             db.transaction((tx) => {
                 tx.executeSql("SELECT Name,Age FROM Users", [],
                (tx,results)=>{
                    var len=results.rows.length;
                    if(len>0){
                       var userName=results.rows.item[0].Name;
                       var userAge=results.rows.item[0].Age;
                       setName(userName)
                       setUserName(userName)
                       setUserAge(userAge)

                    }
                })
            })
        } catch (error) {

            console.log(error)
        }
    }
    return <View style={styles.body}>
        <Text style={styles.text}>Welcome To Home {name}</Text>
        <Text style={styles.text}> User's name is {userName} & age is {userAge}</Text>
        <TextInput style={styles.input} placeholder='Enter your name' value={name} onChangeText={(value) => setName(value)} />

        <Button
            color="#841584" marginTop="20"
            onPress={updateData}
            title="Update User"
        />
        <View style={styles.view}>
            <Button
                color="#841584" marginTop="20"
                onPress={removeData}
                title="Remove User"
            />
        </View>

    </View>
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f080ff"
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
    },
    view: {
        marginTop: 30
    }
})