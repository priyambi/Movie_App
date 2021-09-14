
import React, {useState, Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import DatePicker from 'react-native-datepicker';

const Profile = ({navigation}) => {
  const [value, setValue] = useState(0);
  const [genre, setGenre] = useState('None');
  const [date, setDate] = useState('25-04-1980');
  console.log(date);
  var age_now;
  const calculate_age = date1 => {
    console.log(date1);
    var today = new Date();
    var birthDate = date1;
    //console.log(birthDate);

    age_now = today.getFullYear() - birthDate.split('-')[2];
    var m = today.getMonth() - birthDate.split('-')[1];
    if (m < 0 || (m === 0 && today.getDate() < birthDate.split('-')[0])) {
      age_now--;
    }
    //console.log(date1);
    console.log(today);
    console.log(birthDate);
    console.log('my age', age_now);
    return age_now;
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/profile1.jpg')}
        resizeMode="cover"
        style={styles.bg}>
        <View>
          <Text style={styles.profile}>USER PROFILE</Text>
        </View>
        <View>
          <View style={styles.view}>
            <TextInput
              style={styles.label}
              placeholder="priyambi.hiran@gmail.com:"
              placeholderTextColor="black"
            />
            {/* <Text>{navigation.getParam()}</Text> */}
            {/* <Text style={styles.label}>{data}</Text> */}
          </View>
          <View style={styles.view}>
            <TextInput
              style={styles.label}
              placeholder="Date Of Birth:"
              placeholderTextColor="black"
            />
            <DatePicker
              style={styles.datePickerStyle}
              date={date} 
              mode="date" 
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1980"
              maxDate="01-01-2021"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={date => {
                setDate(date);
              }}
            />
            <Text>{date}</Text>
            <TouchableOpacity onPress={calculate_age(date)}>
              <Text>{age_now}</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.view}>
            <TouchableOpacity onPress={(date)=>calculate_age(date)}>
              <Text>Age</Text>
            </TouchableOpacity>
              
          </View> */}
          <View style={styles.view}>
            <TextInput
              style={styles.label}
              placeholder="Mobile-Number:"
              keyboardType="number-pad"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.view}>
            {/* <TextInput
          style={styles.label}
          placeholder="Upload Your Profile Picture"
          
          placeholderTextColor="white"
          
        /> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('UploadImage')}>
              <Text style={styles.label}> Upload Your Profile Picture:</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.view}>
            <Text style={styles.label}>Rate your Interest in Movies:</Text>

            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={value}
              onValueChange={slideValue => setValue(slideValue)}
              minimumTrackTintColor="#1fb28a"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#b9e4c9"
            />
            <Text style={styles.label}>Interest Level: {value}%</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.label}>Genre:</Text>
            <Picker
              selectedValue={genre}
              onValueChange={currentGenre => setGenre(currentGenre)}>
              <Picker.Item
                style={styles.pick}
                label="Bollywood"
                value="Bollywood"
              />
              <Picker.Item
                style={styles.pick}
                label="Hollywood"
                value="Hollywood"
              />
              <Picker.Item
                style={styles.pick}
                label="Tollywood"
                value="Tollywood"
              />
            </Picker>
            <Text style={styles.label}>Genre: {genre}</Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  bg: {
    height: 700,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  profile: {
    color: 'white',
    fontSize: 40,
    textDecorationLine: 'underline',
    fontFamily: 'sans-serif',
    marginTop: 70,
    marginBottom: 10,
  },
  label: {
    color: 'black',
    fontSize: 17,
    margin: 5,
    opacity: 0.7,
  },
  pick: {
    color: 'black',
    fontSize: 15,

    opacity: 0.7,
  },
  view: {
    padding: 5,
  },
  icon: {
    alignSelf: 'flex-end',
    height: 25,
    width: 25,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
