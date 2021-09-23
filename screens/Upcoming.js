import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Text,
} from 'react-native';
export default function Upcoming(){
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        height:"80%",
    }
})