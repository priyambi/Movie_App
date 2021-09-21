// import 'react-native-gesture-handler';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Splash from './screens/Splash';
// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Profile from './screens/Profile';
// import Login2 from './screens/Login2';
// import Upcoming from './screens/Upcoming';
// import Search from './screens/Search';
// import UploadImage from './screens/UploadImage';
// import {
//   createBottomTabNavigator
// } from '@react-navigation/bottom-tabs';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// function UpcomingStack() {
//   return (
//       <Stack.Navigator
//         initialRouteName="Upcoming"
//         screenOptions={{
//           headerStyle: { backgroundColor: '#42f44b' },
//           headerTintColor: '#fff',
//           headerTitleStyle: { fontWeight: 'bold' }
//         }}>
//         <Stack.Screen
//           name="Upcoming"
//           component={Upcoming}
//           options={{ title: 'Home Page' }}/>
//         {/* <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{ title: 'Detail Page' }} /> */}
//       </Stack.Navigator>
//   );
// }
// function SearchStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Search"
//       screenOptions={{
//         headerStyle: { backgroundColor: '#42f44b' },
//         headerTintColor: '#fff',
//         headerTitleStyle: { fontWeight: 'bold' }
//       }}>
//       <Stack.Screen
//         name="Search"
//         component={Search}
//         options={{ title: 'Setting Page' }}/>
//         <Stack.Screen
//           name="Splash"
//           component={Splash}
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
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
//         <Stack.Screen
//           name="UploadImage"
//           component={UploadImage}
//           options={{headerShown: false}}
//         />
//       {/* <Stack.Screen
//         name="Details"
//         component={DetailsScreen}
//         options={{ title: 'Details Page' }}/>
//       <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ title: 'Profile Page' }}/> */}
//     </Stack.Navigator>
//   );
// }
// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen
//           name="Splash"
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
//         <Stack.Screen
//           name="Login2"
//           component={Login2}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="UploadImage"
//           component={UploadImage}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator> */}
//       <Tab.Navigator
//         initialRouteName="Splash"
//         screenOptions={{
//           activeTintColor: '#42f44b',
//         }}>
//         <Tab.Screen
//           name="HomeStack"
//           component={UpcomingStack}
//           options={{
//             tabBarLabel: 'Home',
//             // tabBarIcon: ({ color, size }) => (
//             //   // <MaterialCommunityIcons
//             //   //   name="home"
//             //   //   color={color}
//             //   //   size={size}
//             //   // />
//             // ),
//           }}  />
//         <Tab.Screen
//           name="SettingsStack"
//           component={SearchStack}
//           options={{
//             tabBarLabel: 'Settings',
//             // tabBarIcon: ({ color, size }) => (
//             //   // <MaterialCommunityIcons
//             //   //   name="settings"
//             //   //   color={color}
//             //   //   size={size}
//             //   // />
//             // ),
//           }} />
//       </Tab.Navigator>
//     </NavigationContainer>
    
//   );
// }
// // const Auth = () => {

// //   return (
// //     <Stack.Navigator initialRouteName="Login">
// //       <Stack.Screen
// //         name="LoginScreen"
// //         component={Login}
// //         options={{headerShown: false}}
// //       />
// //       <Stack.Screen
// //         name="SignUpScreen"
// //         component={Signup}
// //         options={{
// //           title: 'Sign-Up', //Set Header Title
// //           headerStyle: {
// //             backgroundColor: '#307ecc', //Set Header color
// //           },
// //           headerTintColor: '#fff', //Set Header text color
// //           headerTitleStyle: {
// //             fontWeight: 'bold', //Set Header text style
// //           },
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Splash">
// //         <Stack.Screen
// //           name="SplashScreen"
// //           component={Splash}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen
// //           name="Login"
// //           component={Login}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen
// //           name="Signup"
// //           component={Signup}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen
// //           name="Profile"
// //           component={Profile}
// //           options={{headerShown: false}}
// //         />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
// import Splash from './screens/Splash';
// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Profile from './screens/Profile';
// import Login2 from './screens/Login2';
// import UploadImage from './screens/UploadImage';


import Tabs from './navigation/TabNavigator';
import MainStackNavigator from './navigation/StackNavigator';

// const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
      {/* <Stack.Navigator initialRouteName="Splash">
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
       
      </Stack.Navigator> */}
      
    </NavigationContainer>
  );
}
