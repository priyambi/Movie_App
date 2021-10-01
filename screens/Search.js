import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  StatusBar,
  Text,
} from 'react-native';
import axios from 'axios';


export default function Search(){
    
    const apiurl='https://api.themoviedb.org/3/movie/upcoming?api_key=575a360ec0e0b03cc0665d802b5198ce&language=en-US&page=1';
      
     // const [data, setData] = useState([]);
      const[state,setState]=useState({
          s:"Enter a movie.......",
          results:[],
          selected:{}

      });

      const search=()=>{
        axios(apiurl+"&s=" +state.s).then(({data}) => {
            let results=data.results
            console.log(results)
            setState(prevState=>{return{...prevState,results:results}})
        })
      
       
          
      }
      return(
          <View style={styles.container}>
              <Text style={styles.title}>Movie Search</Text>
              <TextInput 
              style={styles.search} 
              onChangeText={text=>setState(prevState=>{return{...prevState,s:text}})}
              onSubmitEditing={search}
              value={state.s}/>
              <ScrollView style={styles.results}>
                {state.results.map(results=>(
                    <View key={results.id} style={styles.result}>
                        <Text style={styles.heading}>{results.title}</Text>
                    </View>
                ))}
              </ScrollView>
          </View>
      );
}

const  styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#223343',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:40,
        paddingHorizontal:20,


    },
    title:{
        color:'#FFF',
        fontSize:40,
        fontWeight:"700",
        alignSelf:'center',
        marginBottom:20,
        fontStyle: 'italic',
        fontFamily:'cursive',

    },
    search:{
        fontSize:15,
        fontWeight:"100",
        padding:10,
        width:"100%",
        height:50,
        backgroundColor:'#FFF',
        borderRadius:50,
        marginBottom:40

    },
    results:{
        flex:1,
    },
    result:{
        flex:1,
        width:'100%',
        marginBottom:20,
    },
    heading:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'700',
        padding:20,
        backgroundColor:'#445565'
    }

})