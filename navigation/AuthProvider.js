import React, { useState, createContext} from 'react'
import auth from '@react-native-firebase/auth'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                        .then(()=>alert('User has Signed Out'));
                    //    props.navigation.navigate('Login');
                    } catch (e) {
                        console.log(e);
                    }
                }
                // logout: async () => {
                //     auth()
                //     .signOut()
                //     .then(()=>alert('User has Signed Out'));
                //     this.props.navigation.navigate('Login');
                // }

            }}>
            {children}
        </AuthContext.Provider>
    )
}