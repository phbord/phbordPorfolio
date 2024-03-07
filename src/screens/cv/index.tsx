import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import i18nData from '../../../assets/data/i18nData';
import spaces from '../../../assets/styles/spaces';
import colors from '../../../assets/styles/colors';
import ButtonBack from '../../components/Ui/ButtonBack';

export default function Cv({navigation}: any) {
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';
  const uri: string = i18nData.t('header', {returnObjects: true})[7].href;

  return (
    <>
      <ButtonBack
        navigation={navigation}
        buttonStyles={styles.button}
        buttonTextStyles={styles.buttonText}
      />
      <WebView
        source={{
          uri,
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
    backgroundColor: colors.greyLight,
  },
  buttonText: {
    color: colors.red,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
