import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../../../assets/styles/colors';

export default function ButtonHeadeLang() {
  const [lang, setLang] = useState('fr');

  const handleClick = () => (lang === 'en' ? setLang('fr') : setLang('en'));

  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.buttonText}>{lang}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    marginLeft: 7.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.light,
  },
  buttonText: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light,
    color: colors.red,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
