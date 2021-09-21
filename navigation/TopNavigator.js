import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Trending from "../screens/Trending";
import Latest from "../screens/Latest";
const Tab=createMaterialTopTabNavigator();
export default function Top(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Trending" component={Trending}/>
            
            <Tab.Screen name="Latest" component={Latest}/>
            
        </Tab.Navigator>
    )
}
