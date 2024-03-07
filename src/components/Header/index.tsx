import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import i18nData from '../../../assets/data/i18nData';
import spaces from '../../../assets/styles/spaces';
import colors from '../../../assets/styles/colors';
import ButtonHeaderNav from './ButtonHeaderNav';
import ButtonHeadeLang from './ButtonHeaderLang';
import ModalHeaderNav from './ModalHeaderNav';

export default function Header() {
  const navigation: object = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      {/* TITLE + LOGO */}
      <TouchableOpacity
        style={styles.btnTitle}
        onPress={() => navigation.navigate('Knowledges')}>
        <Text style={styles.title}>
          {i18nData.t('firstName')} {i18nData.t('lastName')}
        </Text>
      </TouchableOpacity>
      {/* BUTTON GROUP */}
      <View style={styles.containerButtons}>
        <ButtonHeadeLang />
        <ButtonHeaderNav />
      </View>
      {/* MODAL */}
      <ModalHeaderNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingVertical: 5,
    paddingHorizontal: spaces.containerSpaceX,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.red,
    fontFamily: 'Roboto-Regular',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnTitle: {
    flexDirection: 'row',
  },
  title: {
    color: colors.light,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
});
