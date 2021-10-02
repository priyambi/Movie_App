import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieTv} from '../services/services';


const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [searchResults, setSearchResults] = useState();

  const onSubmit = query => {
    Promise.all([searchMovieTv(query, 'movie')])
      .then(([movies]) => {
        const data = [...movies];
        setSearchResults(data);
      })
  };

  return (<ImageBackground
    source={require('../assets/profile1.jpg')}
    resizeMode="cover"
    style={styles.bg}>
    
      <SafeAreaView>
          <Text style={styles.header}>Movie Search</Text>
        <View style={styles.container}>
        
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={'Search Movie '}
              placeholderTextColor='black'
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Icon name={'search-outline'} size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchItems}>
        
        
            <FlatList
              numColumns={3}
              
              data={searchResults}
              keyExtractor={item => item.id}
              renderItem={({item}) => <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Detail',{movieDetail:item})}>
                <Image onPress={() => navigation.navigate('Detail',{movieDetail:item})}  style={{ width: 100, height: 120, margin: 5 }}
              source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }} /></TouchableOpacity>
              
              </View>}
              
            />
        </View>
      </SafeAreaView>
      </ImageBackground>
 
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 50,
    borderWidth: 1.5,
    height: 50,
    padding: 10,
    backgroundColor:'white',
  },
  container: {
    padding: 10,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header:{
    alignSelf:'center',
    fontSize:35,
    fontWeight:'bold',
    fontStyle:'italic',
    marginTop:10,
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },

  searchItems: {
    padding: 5,
  },

  noResults: {
    paddingTop: 20,
  },
  bg: {
    height: 700,
  },
});

export default Search;
