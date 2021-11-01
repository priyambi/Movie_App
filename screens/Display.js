import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

export default function Display({ id, title, complete }) {
  async function toggleComplete() {
    await firestore()
      .collection('favs')
      .doc(id)
      .update({
        complete: !complete,
      });
  }

  return (
    <FlatList
      title={title}
      onPress={() => toggleComplete()}
      
    />
    // <View>
    //     <Text>HEllo</Text>
    // </View>
  );
}

