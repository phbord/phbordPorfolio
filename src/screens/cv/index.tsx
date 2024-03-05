import React from 'react';
import {useSelector} from 'react-redux';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {IconArrowLeft} from '../../../assets';
import i18nData from '../../../assets/data/i18nData';
import spaces from '../../../assets/styles/spaces';
import colors from '../../../assets/styles/colors';

export default function Cv({navigation}) {
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';

  const ButtonBack = (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Image source={IconArrowLeft} style={styles.arrow} />
      <Text style={styles.buttonText}>{i18nData.t('prevPageText')}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      {ButtonBack}
      <WebView
        source={{
          uri: 'https://www.dropbox.com/s/myarm5ozn29wwim/CV_pierre-henri_bord_dev-front.pdf?dl=0',
        }}
        originWhitelist={['https://*']}
        style={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: spaces.containerSpaceX,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.red,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    backgroundColor: colors.greyLight,
  },
  buttonText: {
    color: colors.red,
    fontSize: 16,
  },
  arrow: {
    width: 30,
    height: 30,
    marginRight: 2.5,
  },
});
