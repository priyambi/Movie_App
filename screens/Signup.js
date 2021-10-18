import React, {Component, useState, useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';

export default function Signup({navigation}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [isError, setIsError] = useState('');
  const {register} = useContext(AuthContext);

  const checkValidation = e => {
    setcPassword(e.target.value);
    if (password != cpassword) {
      setIsError('Password does not match');
    }
  };

  // onChange = password => this.setState({ password })
  return (
    <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>
      <Image style={styles.image} source={require('../assets/xyz.png')} />

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User-Name"
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile-Number"
          keyboardType="number-pad"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="black"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={cpassword => setcPassword(cpassword)}
          value={cpassword}
        />
      </View>

      <View style={styles.barView}>
        <BarPasswordStrengthDisplay password={password} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => register(email, password)}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10,
    marginTop: 0,

    width: 100,
    height: 100,
    opacity: 0.7,
    resizeMode: 'contain',
  },
  searchIcon: {
    alignSelf: 'baseline',
  },

  inputView: {
    backgroundColor: 'lightpink',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 2,
    opacity: 0.8,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 17,
    color: 'black',
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
    color: 'white',
  },

  loginBtn: {
    width: 180,
    borderRadius: 25,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  loginText: {
    color: 'black',
    fontSize: 15,
  },
  end: {
    color: 'black',
    fontFamily: 'roboto',
  },
  bg: {
    height: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barView: {
    marginTop: 1,
    color: 'black',
    alignSelf: 'center',
    width: '25%',
    alignItems: 'center',
  },
});
