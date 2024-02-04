import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../assets/styles/colors';
import {IconBurgerMenu} from '../../../assets';

export default function ButtonHeaderNav() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log('Pressed')}>
      <Image source={IconBurgerMenu} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 7.5,
    padding: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.light,
    color: colors.red,
  },
});
