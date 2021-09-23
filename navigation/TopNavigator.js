import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Trending from "../screens/Trending";
import Latest from "../screens/Latest";
import Upcoming from "../screens/Upcoming";
const Tab=createMaterialTopTabNavigator();
export default function Top(){
    return(
        <Tab.Navigator screenOptions={{
            //tabBarShowLabel:false,
            tabBarStyle:{
            position:'absolute',
            //bottom:25,
            top:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'lightpink',
            borderRadius:15,
            height:40,
            justifyContent:'center',
            
            

            
        }
    }}>
            <Tab.Screen name="Upcoming" component={Upcoming}/>
            <Tab.Screen name="Trending" component={Trending}/>
            <Tab.Screen name="Latest" component={Latest}/>
            
        </Tab.Navigator>
    )
}
