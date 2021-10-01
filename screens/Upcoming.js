import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';



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
    <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>


      <FlatList
        data={data.results}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) =>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
            {/* <TouchableOpacity onPress={()=>Alert.alert('Release Date:  ' + item.release_date)}> */}
            {/* <Text>{item.title}</Text> */}
            <Image onPress={() => Alert.alert(item.overview)} style={{ width: 80, height: 80, margin: 5 }}
              source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }} />
            {/* <Image
              source={{ uri:`https://image.tmdb.org/t/p/original/${item.poster_path}`}}/> */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text onPress={() => Alert.alert(item.overview)} style={{ fontSize: 18, color: 'black', marginBottom: 15 }}>{item.title}</Text>
              <Text style={{ fontSize: 16, color: 'black' }}>{item.release_date}</Text>
            </View>

            {/* </TouchableOpacity> */}
          </View>
        }
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,





  },

})
