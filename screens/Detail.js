import React from "react";
import {Text,View,StyleSheet,Image,ImageBackground} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import StarRating from 'react-native-star-rating';

const Detail=({route,navigation})=>{
    const movieDetail=route.params.movieDetail;
    return(
        <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>
        <View style={styles.container}>
            <ScrollView >
            <Image  style={styles.image}
              source={{ uri: 'https://image.tmdb.org/t/p/original/' + movieDetail.poster_path }} />
            <Text style={styles.movieName}>{movieDetail.title}</Text>
            <View style={styles.container1}>
            <StarRating padding={1} starSize={30} fullStarColor={'red'} disabled={true} maxStars={5} rating={movieDetail.vote_average/2}/>
            </View>
            <View style={styles.overview}>
            <Text style={styles.info}> {movieDetail.overview}</Text></View>
            <View style={styles.overview}>
            <Text style={styles.label}>Release Date: {movieDetail.release_date}</Text>
            <Text style={styles.label}>Popularity: {movieDetail.popularity} %</Text></View>
            </ScrollView>
        </View>
        </ImageBackground>
    );};
export default Detail
const styles = StyleSheet.create({
    image: {
      height:300,
     
      
    },
    container:{
        flex:1,
        //justifyContent:'center',
       // alignItems:'center',

    },
    container1:{
        flex:1,
        justifyContent:'center',
       alignItems:'center',

    },
    movieName:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    overview:{
        margin:20,
        justifyContent:'center',
        alignSelf:'center',

    },
    bg: {
        flex: 1,
    },
    info:{
        fontSize:15,
        fontWeight:'700'
    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        fontStyle:'italic',
        
    }
  
  })