import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Login2 from './screens/Login2';
import UploadImage from './screens/UploadImage';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
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
          name="Login2"
          component={Login2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadImage"
          component={UploadImage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const Auth = () => {

//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen
//         name="LoginScreen"
//         component={Login}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="SignUpScreen"
//         component={Signup}
//         options={{
//           title: 'Sign-Up', //Set Header Title
//           headerStyle: {
//             backgroundColor: '#307ecc', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen
//           name="SplashScreen"
//           component={Splash}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Signup"
//           component={Signup}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={Profile}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
