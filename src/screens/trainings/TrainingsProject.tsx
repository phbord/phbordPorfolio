import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../../assets/styles/colors';

export default function TrainingsProject({item}) {
  return (
    <View>
      {item.project && <Text style={styles.item}>{item.project}</Text>}
      {item.url && <Text style={styles.item}>{item.url}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    color: colors.greyDark,
    fontSize: 14,
  },
});
