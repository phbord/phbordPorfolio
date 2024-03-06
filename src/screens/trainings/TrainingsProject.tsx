import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {dowloadsInterface} from '../../interfaces/mainData/dowloadsInterface';
import colors from '../../../assets/styles/colors';
import dataHeader from '../../../assets/data/dataHeader';

export default function TrainingsProject({
  navigation,
  item,
}: dowloadsInterface) {
  return (
    <View>
      {item.project && <Text style={styles.item}>{item.project}</Text>}
      {item.url && (
        <TouchableOpacity
          onPress={() => navigation.navigate(dataHeader[10], {uri: item.url})}>
          <Text style={styles.item}>{item.url}</Text>
        </TouchableOpacity>
      )}
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
