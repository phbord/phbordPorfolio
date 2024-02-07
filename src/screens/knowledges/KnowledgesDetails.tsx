import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import spaces from '../../../assets/styles/spaces';

export default function KnowledgesDetails({item, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>////////////</Text>
      <Text style={styles.container}>+++{item.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spaces.containerSpaceX,
    flex: 1,
  },
});
