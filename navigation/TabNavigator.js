import React from 'react';
import {
     createBottomTabNavigator
     } from '@react-navigation/bottom-tabs';
import Upcoming from '../screens/Upcoming';
import Search from '../screens/Search';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';
import Splash from '../screens/Splash';
import Login from '../screens/Splash';
import Signup from '../screens/Signup';
import UploadImage from '../screens/UploadImage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStackNavigator from './StackNavigator';
import Top from './TopNavigator';
const Tab=createBottomTabNavigator();
const Stack = createStackNavigator();
// function UpcomingStack(){
//     return(
//         <NavigationContainer>
//         <Stack.Navigator initialRouteName="Splash">
//           <Stack.Screen
//             name="Splash"
//             component={Splash}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="Signup"
//             component={Signup}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="Profile"
//             component={Profile}
//             options={{headerShown: false}}
//           />
          
//           <Stack.Screen
//             name="UploadImage"
//             component={UploadImage}
//             options={{headerShown: false}}
//           />
         
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
// }
const Tabs=()=>{
    return(
        <Tab.Navigator initialRouteName="Splash">
             {/* <Tab.Screen name="Splash" component={Splash} options={{headerShown: false}}/> */}
            <Tab.Screen name="Upcoming" component={Top} options={{headerShown: false}}/>
            <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Tab.Screen name="Favourite" component={Favourite} options={{headerShown: false}}/>
            <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
export default Tabs;

