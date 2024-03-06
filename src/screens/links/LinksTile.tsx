import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {dowloadsInterface} from '../../interfaces/mainData/dowloadsInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {IconStar} from '../../../assets';
import colors from '../../../assets/styles/colors';
import dataHeader from '../../../assets/data/dataHeader';

export default function LinksTile({navigation, item}: dowloadsInterface) {
  const lang: RootState = useSelector(selectLang);

  return (
    <View style={styles.container}>
      <Text style={item.is_important ? styles.titleFav : styles.title}>
        {lang === 'fr' ? item.title_fr : item.title_en}
      </Text>
      <Text style={styles.subtitle}>
        {item.subtitle}
        {item.is_important && (
          <Image source={IconStar} style={styles.iconStar} />
        )}
      </Text>
      <View>
        <Text style={styles.text}>
          {lang === 'fr' ? item.description_fr : item.description_en}
        </Text>
        {item.url && !item.isNotMenu && (
          <TouchableOpacity
            onPress={() => navigation.navigate(dataHeader[9], {uri: item.url})}>
            <Text style={styles.link} numberOfLines={1} ellipsizeMode="tail">
              {item.url}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    width: '100%',
    display: 'flex',
    marginTop: 25,
    paddingTop: 10,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
  },
  titleFav: {
    width: '100%',
    display: 'flex',
    marginTop: 25,
    paddingTop: 10,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtitle: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.greyDark,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    marginTop: 5,
    color: colors.greyDark,
    fontSize: 16,
  },
  link: {
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    marginTop: 5,
    color: colors.blueMiddle,
    fontSize: 16,
  },
  iconStar: {
    width: 20,
    height: 20,
  },
});
