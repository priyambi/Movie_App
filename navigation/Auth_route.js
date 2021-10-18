import React, { useContext, useState, useEffect } from 'react'
import MainStackNavigator from './StackNavigator';
import LoginNavigator from './LoginNavigator';

import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

function Auth_route() {

   
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    const [user, setUser] = useState(AuthContext);
    const [initializing, setInitializing] = useState( true);

    if (initializing) return null;


    return (
        <NavigationContainer independent={true}>
          {  user ? <MainStackNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    )
}

export default Auth_route