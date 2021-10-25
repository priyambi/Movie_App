import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import PlayButton from '../components/PlayButton';
import FavButton from '../components/FavButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';
import auth from '@react-native-firebase/auth';
import firestore from '@firebase/firestore';

const Detail = ({route, navigation}) => {
  const movieDetail = route.params.movieDetail;
  // const movieId = this.props.route.params.movieDetail.id;
  const [modalVisible, setModalVisible] = useState(false);
  const Video = () => {
    setModalVisible(!modalVisible);
  };
  // const addToFavourites=async(movieId)=>{
  //   alert('Added to Favourites');
  //   var currentUser=await auth().currentUser;
  //   this.dbRef.add({
  //     email:auth().currentUser.email,
  //     favourites:this.props.route.params.videoId,
  //   })
  // }
  return (
    <ImageBackground
      source={require('../assets/profile1.jpg')}
      resizeMode="cover"
      style={styles.bg}>
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://image.tmdb.org/t/p/original/' +
                movieDetail.poster_path,
            }}
          />
          <View style={styles.button}>
            <PlayButton handlePress={Video} />
          </View>

          <View style={styles.fav}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => Alert.alert('Movie added to Favourites')}>
              <FavButton />
            </TouchableOpacity>
          </View>
          <Text style={styles.movieName}>{movieDetail.title}</Text>

          <View style={styles.container1}>
            <StarRating
              padding={1}
              starSize={30}
              fullStarColor={'red'}
              disabled={true}
              maxStars={5}
              rating={movieDetail.vote_average / 2}
            />
          </View>
          <View style={styles.overview}>
            <Text style={styles.info}> {movieDetail.overview}</Text>
          </View>
          <View style={styles.overview}>
            <Text style={styles.label}>
              Release Date: {movieDetail.release_date}
            </Text>
            <Text style={styles.label}>
              Popularity: {movieDetail.popularity} %
            </Text>
          </View>
        </ScrollView>
        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.video}>
            <Pressable onPress={() => Video()}>
              <Icon name={'arrow-back-circle-outline'} size={50}></Icon>
            </Pressable>
            <View>
              <YoutubePlayer height={500} play={true} videoId={'3RZ7uTh_0yA'} />
              {/* <WebView
        style={ {  marginTop: (Platform.OS == 'ios') ? 20 : 0,} }
        // javaScriptEnabled={true}
        // domStorageEnabled={true}
        source={{uri: 'https://www.youtube.com/watch?v=KQ6zr6kCPj8' }}
    /> */}
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};
export default Detail;
const styles = StyleSheet.create({
  image: {
    height: 300,
  },
  container: {
    flex: 1,
    //justifyContent:'center',
    // alignItems:'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    // marginTop: 1,
    alignSelf: 'center',
  },
  overview: {
    margin: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bg: {
    flex: 1,
  },
  info: {
    fontSize: 15,
    fontWeight: '700',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  button: {
    top: -20,
    right: -300,
  },
  fav: {
    top: -70,
    right: -240,
  },
  video: {
    flex: 1,
    top: 10,
  },
});
