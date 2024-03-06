import React from 'react';
import {Image, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import i18nData from '../../../assets/data/i18nData';
import {IconArrowLeft} from '../../../assets';

interface ButtonBackInterface {
  navigation: any;
  buttonStyles?: ViewStyle;
  buttonTextStyles?: TextStyle;
}

export default function ButtonBack({
  navigation,
  buttonStyles,
  buttonTextStyles,
}: ButtonBackInterface): React.JSX.Element {
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={buttonStyles}>
      <Image source={IconArrowLeft} style={styles.arrow} />
      <Text style={buttonTextStyles}>{i18nData.t('prevPageText')}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrow: {
    width: 30,
    height: 30,
    marginRight: 2.5,
  },
});
