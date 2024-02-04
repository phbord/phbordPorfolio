import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Knowledges() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Knowledges item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
});
