import { View, StyleSheet, Text, Button, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { setName, setAge, getPosts } from './action';
import { useSelector, useDispatch } from 'react-redux';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import PushNotification from "react-native-push-notification";


export default function Home({ navigation }) {

    const { name, age, posts } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [userAge, setUserAge] = useState('');
    // const [userName, setUserName] = useState('');

    const handleNotification=(item)=>{

        PushNotification.localNotification({
            channelId: "channel-id", 
            title:"Your clicked on"+item.title,
            message:"asdfsa"

        })
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Please enter a valid user nameaaaa')
        } else {
            try {
                dispatch(setName(name));
                dispatch(setAge(age));
                await AsyncStorage.setItem('UserName', name);
                const user = {
                    Name: name,
                    Age: age
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
        dispatch(getPosts());
    }, [])

    const getData = async () => {
        try {

            AsyncStorage.getItem('UserName')
                .then(value => {
                    if (value != null) {
                        // setName(value)
                        dispatch(setName(name));
                    }
                })
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        // setUserAge(user.Age)
                        // setUserName(user.Name)
                        dispatch(setName(user.Name));
                        dispatch(setAge(user.Age));


                    }
                })

        } catch (error) {

            console.log(error)
        }
    }
    return <View style={styles.body}>
        <Text style={styles.text}>Welcome To Api</Text>
        <Text style={styles.text}>Welcome To Home {name}</Text>
        <Text style={styles.text}> User's name is {name} & age is {age}</Text>
        <TextInput style={styles.input} placeholder='Enter your name Redux' value={name} onChangeText={(value) => dispatch(setName(value))} />

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

        <FlatList data={posts}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{handleNotification(item)}}>
                    <View style={styles.listbackground}>
                        <Text style={styles.listItem, { fontSize: 24 }}>{item.id}</Text>
                        <Text style={styles.listItem}>{item.title}</Text>
                    </View>
                </TouchableOpacity>

            )}
        />

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
    },
    listItem: {
        margin: 5,
        color: '#ffffff',
        padding: 5,

    },
    listbackground: {
        backgroundColor: '#808080',
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5

    }
})