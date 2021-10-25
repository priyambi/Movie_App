import React, { useContext, useState, useEffect } from 'react'
import MainStackNavigator from './StackNavigator';
import LoginNavigator from './LoginNavigator';

import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

function Auth_route() {

    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);

    function onAuthStateChanged(user) {
        setUser(user);
        // setisSignedIn(true);
        if (initializing) setInitializing(false);
    }

    const {isSignedIn, setisSignedIn, user,setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState( true);

    if (initializing) return null;


    return (
        <NavigationContainer independent={true}>
          {  isSignedIn ? <MainStackNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    )
}

export default Auth_route