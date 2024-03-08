import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import i18nData from '../../../assets/data/i18nData';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import FooterTile from './FooterTile';

export default function Footer() {
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';

  const iconList: Array<string> = ['React', 'React Native', 'Supabase'];

  return (
    <View style={styles.container}>
      <Text style={styles.copyright}>
        © {i18nData.t('firstName')} {i18nData.t('lastName')} 2024
      </Text>
      <View style={styles.poweredGroup}>
        <Text style={styles.powered}>Powered by </Text>
        {iconList.map((item: any, index: React.Key | null | undefined) => (
          <FooterTile key={index} item={item} index={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spaces.containerSpaceX,
    paddingTop: spaces.containerSpaceX,
    paddingBottom: 35,
    borderTopColor: colors.greyDark,
    borderTopWidth: 1,
  },
  copyright: {
    marginBottom: 2.5,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  poweredGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  powered: {
    fontFamily: 'Roboto-Regular',
  },
});
