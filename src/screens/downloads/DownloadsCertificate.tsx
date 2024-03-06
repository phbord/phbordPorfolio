import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {dowloadsCertificateInterface} from '../../interfaces/mainData/DownloadsCertificateInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import i18nData from '../../../assets/data/i18nData';
import spaces from '../../../assets/styles/spaces';
import colors from '../../../assets/styles/colors';
import ButtonBack from '../../components/Ui/ButtonBack';

export default function DownloadsCertificate({
  route,
  navigation,
}: dowloadsCertificateInterface) {
  const {uri} = route.params;
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';

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
    borderStyle: 'dotted',
    backgroundColor: colors.greyLight,
  },
  buttonText: {
    color: colors.red,
    fontSize: 16,
  },
});
