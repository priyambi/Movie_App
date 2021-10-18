import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import UploadImage from '../screens/UploadImage';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
const Stack = createStackNavigator();
export default function LoginNavigator(){
  return (
  
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UploadImage"
          component={UploadImage}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    
    
  );
}