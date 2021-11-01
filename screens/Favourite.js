import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  StatusBar,
  ImageBackground,
  Text,
} from 'react-native';
import Display from '../screens/Display';
import firestore from '@react-native-firebase/firestore';


export default function Favourite({route, navigation}){
    // const movieDetail = route.params.movieDetail;
    const [favs,setFavs]=useState([]);
    const [ loading, setLoading ] = useState(true);
    
     const getFav=async ()=>{
        const ref = firestore().collection('favs');
        setLoading(true);
        ref.onSnapshot(querySnapshot => {
            setFavs([]);
            querySnapshot.forEach((documentSnapshot)=>{
                // if(!favs.includes(documentSnapshot.data().title)){
                 setLoading(true);
                setFavs(favs=>favs.concat(documentSnapshot.data()));
                // }
                
            });
            console.log(favs);

        });
        setLoading(false);
    }
    useEffect(() => {
          getFav();
        }, []);
    return(
        <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>
        <View style={styles.container}>
            <Text style={styles.header}>FAVOURITE MOVIES</Text>
            {loading==false?(<FlatList
        style={{flex: 1}}
        data={favs}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />) : (
        <ActivityIndicator color="red" size="large" style={{marginTop: 100}} />
      )}
   
        </View></ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    header:{
        fontSize:30,
        margin:10,
    },
    bg: {
        flex: 1,
      },
})
