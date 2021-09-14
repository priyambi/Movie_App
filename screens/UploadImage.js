import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [filePath, setFilePath] = useState({});
  const [imagepath, setImagepath] = useState(" ");

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
      setImagepath(image.path);
    });
    // let options = {
    //   mediaType: type,
    //   maxWidth: 300,
    //   maxHeight: 550,
    //   quality: 1,
    // //   videoQuality: 'low',
    // //   durationLimit: 30, //Video max duration in seconds
    //   saveToPhotos: true,
    // };
    // let isCameraPermitted = await requestCameraPermission();
    // let isStoragePermitted = await requestExternalWritePermission();
    // if (isCameraPermitted && isStoragePermitted) {
    //   launchCamera(options, (response) => {
    //      console.log('Response = ', response);

    //     if (response.didCancel) {
    //       alert('User cancelled camera picker');
    //       return;
    //     } else if (response.errorCode == 'camera_unavailable') {
    //       alert('Camera not available on device');
    //       return;
    //     } else if (response.errorCode == 'permission') {
    //       alert('Permission not satisfied');
    //       return;
    //     } else if (response.errorCode == 'others') {
    //       alert(response.errorMessage);
    //       return;
    //     }
    //     setFilePath(response);
    //   });
    // }
  };

  const chooseFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image.path);
      setImagepath(image.path);
    });
    // let options = {
    //   mediaType: type,
    //   maxWidth: 300,
    //   maxHeight: 550,
    //   quality: 1,
    // };
    // launchImageLibrary(options, (response) => {
    //  console.log('Response = ', response);

    //   if (response.didCancel) {
    //     alert('User cancelled camera picker');
    //     return;
    //   } else if (response.errorCode == 'camera_unavailable') {
    //     alert('Camera not available on device');
    //     return;
    //   } else if (response.errorCode == 'permission') {
    //     alert('Permission not satisfied');
    //     return;
    //   } else if (response.errorCode == 'others') {
    //     alert(response.errorMessage);
    //     return;
    //   }
    // setFilePath(response);
    // });
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/profile1.jpg')}
        resizeMode="cover"
        style={styles.bg}>
        <Text style={styles.titleText}>
          Choose Your Profile Picture
        </Text>
        <View style={styles.container}>
          <Image
            source={{
              uri: imagepath
            }}
            style={styles.imageStyle}
          />

          {/* <View>
        {imageSource === null ? (
          <Image
            source={require('../assets/abc.jpg')}
           
            resizeMode="contain"
          />
        ) : (
          <Image
            source={{ uri: imageSource }}
           
            resizeMode="contain"
          />
        )}
      </View> */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => captureImage('photo')}>
            <Text style={styles.textStyle}>
              Launch Camera for Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => chooseFile('photo')}>
            <Text style={styles.textStyle}>Choose Image</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 40,

    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'lightpink',
    borderColor: 'white',
    opacity: 0.8,
    borderRadius: 30,
    borderWidth: 2,
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 120,
    height: 120,
    margin: 5,
  },
  bg: {
    height: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },
});