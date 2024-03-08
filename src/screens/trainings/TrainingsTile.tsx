import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {dowloadsInterface} from '../../interfaces/mainData/dowloadsInterface';
import {IconStar} from '../../../assets';
import colors from '../../../assets/styles/colors';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {RootState} from '../../interfaces/mainData/reduxInterface';
import TrainingsProject from './TrainingsProject';

export default function TrainingsTile({navigation, item}: dowloadsInterface) {
  const lang: RootState = useSelector(selectLang);

  const getYearEnd = item.year_end
    ? `-${String(item.year_end).substring(2)}`
    : '';

  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {item.year_start}
        {item.year_end && getYearEnd}
      </Text>
      <Text style={item.is_important ? styles.titleFav : styles.title}>
        {lang === 'fr' ? item.title_fr : item.title_en}
        {lang === 'fr' && item.duration_fr && ` - ${item.duration_fr}`}
        {lang === 'en' && item.duration_en && ` - ${item.duration_en}`}
        {item.is_important && (
          <Image source={IconStar} style={styles.iconStar} />
        )}
      </Text>
      <Text style={styles.school}>{item.school}</Text>
      {/* LIST */}
      <View style={styles.list}>
        {lang === 'fr' &&
          item.projects_fr &&
          item.projects_fr.map((itemList: any, index: React.Key | null | undefined) => (
            <TrainingsProject
              key={index}
              item={itemList}
              navigation={navigation}
            />
          ))}
        {lang === 'en' &&
          item.projects_en &&
          item.projects_en.map((itemList: any, index: React.Key | null | undefined) => (
            <TrainingsProject
              key={index}
              item={itemList}
              navigation={navigation}
            />
          ))}
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
  date: {
    width: '100%',
    marginTop: 25,
    paddingTop: 10,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    flexShrink: 1,
    color: colors.red,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  titleFav: {
    display: 'flex',
    flexWrap: 'wrap',
    flexShrink: 1,
    color: colors.red,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    textTransform: 'uppercase',
    paddingRight: 15,
  },
  iconStar: {
    width: 20,
    height: 20,
  },
  school: {
    width: '100%',
    flexShrink: 1,
    display: 'flex',
    color: colors.greyDark,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  list: {
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
