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
import MapView from 'react-native-maps';

const Map = () => {

    return (<View style={style.body}>
        <Text style={style.text} >Map</Text>
        <MapView style={style.map}
            initialRegion={{
                latitude: 30.6942,
                longitude: 76.8606,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />

    </View>);
};

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f0ff8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        color: '#00f000',
        fontSize: 30,
        margin: 14,
        borderColor: '#fff34f',
        borderWidth: 3,
        textTransform: 'uppercase',
        height:10


    },

    map: {
        width: "100%",
        height: "90%"

    }
});
export default Map;
