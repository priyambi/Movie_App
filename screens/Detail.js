import React from "react";
import {Text,View,StyleSheet,Image} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import StarRating from 'react-native-star-rating';

const Detail=({route,navigation})=>{
    const movieDetail=route.params.movieDetail;
    return(
        <View style={styles.container}>
            <ScrollView >
            <Image  style={styles.image}
              source={{ uri: 'https://image.tmdb.org/t/p/original/' + movieDetail.poster_path }} />
            <Text style={styles.movieName}>{movieDetail.title}</Text>
            <StarRating starSize={30} fullStarColor={'gold'} disabled={true} maxStars={5} rating={movieDetail.vote_average/2}/>
            <Text>Language: {movieDetail.original_language}</Text>
            <Text>{movieDetail.release_date}</Text>
            <Text>{movieDetail.popularity}</Text>
            </ScrollView>
        </View>
    );};
export default Detail
const styles = StyleSheet.create({
    image: {
      height:300,
      
    },
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems:'center',

    },
    movieName:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
  
  })