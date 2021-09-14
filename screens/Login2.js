import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';


export default function App({navigation}) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>
      <Image style={styles.image} source={require('../assets/pic.png')} />

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#003f5c"
          // onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          // onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.icon} source={require('../assets/arrow.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 20,
    marginTop: 170,
    paddingTop: 5,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  icon: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
  },

  inputView: {
    backgroundColor: 'lightpink',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    width: '80%',
    height: 45,
    marginBottom: 20,
    opacity: 0.8,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 17,
  },

  bg: {
    height: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
