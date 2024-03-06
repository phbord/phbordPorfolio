import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {dowloadsInterface} from '../../interfaces/mainData/dowloadsInterface';
import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {IconDownload, IconStar} from '../../../assets';
import colors from '../../../assets/styles/colors';
import dataHeader from '../../../assets/data/dataHeader';

export default function DownloadsTile({navigation, item}: dowloadsInterface) {
  const lang: RootState = useSelector(selectLang);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {item.year}
        {item.is_important && (
          <Image source={IconStar} style={styles.iconStar} />
        )}
      </Text>
      <Text style={item.is_important ? styles.diplomaFav : styles.diploma}>
        {lang === 'fr' ? item.diploma_fr : item.diploma_en}
      </Text>
      <Text style={styles.title}>
        {lang === 'fr' ? item.title_fr : item.title_en}
      </Text>
      {item.school && <Text style={styles.text}>{item.school}</Text>}
      {item.file && !item.isNotMenu && (
        <TouchableOpacity
          onPress={() => navigation.navigate(dataHeader[8], {uri: item.file})}
          style={styles.file}>
          <Image source={IconDownload} />
        </TouchableOpacity>
      )}
      {!item.file && !item.isNotMenu && (
        <View style={styles.file}>
          <Image source={IconDownload} style={styles.iconDownload} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 600,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
    paddingTop: 10,
    borderTopColor: colors.red,
    borderTopWidth: 1,
  },
  diploma: {
    width: '100%',
    display: 'flex',
    color: colors.red,
    fontSize: 18,
  },
  diplomaFav: {
    width: '100%',
    display: 'flex',
    color: colors.red,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.greyDark,
    fontSize: 16,
  },
  title: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.red,
    fontSize: 16,
  },
  subtitle: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.greyMiddle,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  link: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.blueMiddle,
    fontSize: 16,
  },
  iconStar: {
    width: 20,
    height: 20,
  },
  file: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconDownload: {
    opacity: 0.25,
  },
});
