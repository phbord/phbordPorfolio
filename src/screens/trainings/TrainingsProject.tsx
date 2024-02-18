import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../../../assets/styles/colors';

export default function TrainingsProject({item}) {
  const handlePress = () => {
    Linking.canOpenURL(item.url).then(() => {
      Linking.openURL(item.url);
    });
  };

  return (
    <View>
      {item.project && <Text style={styles.item}>{item.project}</Text>}
      {item.url && (
        <TouchableOpacity onPress={handlePress}>
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
