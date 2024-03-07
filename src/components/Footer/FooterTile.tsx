import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../../assets/styles/colors';

interface FooterTileInterface {
  item: string;
  index: number;
}

export default function FooterTile({item, index}: FooterTileInterface) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {index > 0 && ' | '}
        {item}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Bold',
  },
});
