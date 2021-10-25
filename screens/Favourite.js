import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  Text,
} from 'react-native';
export default function Favourite({route, navigation}){
    // const movieDetail = route.params.movieDetail;
    return(
        <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>
        <View style={styles.container}>
            <Text style={styles.header}>FAVOURITE MOVIES</Text>
        </View></ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    header:{
        fontSize:30,
        margin:10,
    },
    bg: {
        flex: 1,
      },
})