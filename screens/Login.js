import React, {useState,useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
// import Tabs from '../navigation/TabNavigator';
// import Home from '../screens/Home';
// import {NavigationContainer} from '@react-navigation/native';

export default function App({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{login}= useContext(AuthContext)
  return (
    <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>
      <Image style={styles.image} source={require('../assets/movie2.png')} />

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(pass) => setPassword(pass)}
          value={password}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN IN WITH GOOGLE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
      
         onPress={() => login(email,password) }
        // onPress={()=>{this.props.navigation.navigate('Profile', {
        //   data: email
        // });}}
        >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.end}>Don't have an account?Sign-Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363940',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 20,
    paddingTop: 5,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  inputView: {
    backgroundColor: 'lightpink',
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 3,
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

  forgot_button: {
    height: 30,
    marginBottom: 10,
    color: 'black',
  },

  loginBtn: {
    width: '60%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  loginText: {
    color: 'black',
    fontSize: 15,
  },
  end: {
    marginBottom: 100,
    color: 'black',
    fontFamily: 'roboto',
    padding: 10,
  },
  bg: {
    height: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
