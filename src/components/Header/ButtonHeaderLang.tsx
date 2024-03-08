import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  selectLang,
  toogleLang,
} from '../../services/store/features/langs/langSlice';
import colors from '../../../assets/styles/colors';
import {AppDispatch, RootState} from '../../interfaces/mainData/reduxInterface';

export default function ButtonHeadeLang() {
  const lang: RootState = useSelector(selectLang);
  const dispatch: AppDispatch = useDispatch();

  const getLang = (): string => (lang === 'fr' ? 'en' : 'fr');

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(toogleLang())}>
      <Text style={styles.lang}>{getLang()}</Text>
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
  lang: {
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
