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
const Stack = createStackNavigator();
export default function MainStackNavigator(){
  return (
  
      <Stack.Navigator >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
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
       
      </Stack.Navigator>
    
    
  );
}