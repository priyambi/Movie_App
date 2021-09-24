import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity, Alert,Image} from 'react-native';


export default function Upcoming() {
  const [data, setData] = useState([]);
  //console.log(data);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=575a360ec0e0b03cc0665d802b5198ce&language=en-US&page=1',
    )
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upcoming Movies</Text>

      <FlatList
        data={data.results}
        keyExtractor={({id}) => id}
        renderItem={({item}) => 
        <View >
          <TouchableOpacity onPress={()=>Alert.alert('Release Date:  ' + item.release_date)}>
            <Text>{item.title}</Text>
            {/* <Text>{item.release_date}</Text> */}
            
          </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      label:{
        marginTop:70,
        fontSize:30,
        fontStyle:'italic',
        textDecorationLine:'underline',
        marginBottom:20,
       
      }
})