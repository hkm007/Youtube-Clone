import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants';

function Player() {
    return (
        <View style={{flex:1, marginTop: Constant.statusBarHeight}}>
            <Text>Player screen</Text>
        </View>
    )
}

export default Player
