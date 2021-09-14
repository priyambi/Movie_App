import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Text,
} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container1}>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              style={styles.image}
              source={require('../assets/movie.png')}
            />
            <Text style={styles.text}>Priyambi's Movie Mania</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00204A',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005792',
    height: 300,
    width: 300,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BBF0',
    opacity: 0.8,
    height: 200,
    width: 200,
  },
 
  image: {
    paddingTop: 10,
    width: 170,
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'cursive',
    fontSize: 30,
    fontStyle: 'italic',
    marginTop: 10,
  },
});
