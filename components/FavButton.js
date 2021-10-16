import React from 'react';
import { Pressable,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default function FavButton(){
    
    return(
        <Pressable style={styles.button}>
            <Icon name={'heart-sharp'} size={30}></Icon>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    button:{
       
        borderRadius:50,
        width:50,
        padding:10,
        backgroundColor:'yellow'
    }
})