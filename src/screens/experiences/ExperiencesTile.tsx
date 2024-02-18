import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import colors from '../../../assets/styles/colors';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {RootState} from '../../interfaces/mainData/reduxInterface';
import {IconPlus} from '../../../assets';

export default function ExperiencesTile({item, navigation}) {
  const lang: RootState = useSelector(selectLang);

  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={item.is_important ? styles.titleFav : styles.title}>
        {lang === 'fr' ? item.firm_fr : item.firm_en}
      </Text>
      {/* ESN */}
      {lang === 'fr' && item.esn_fr && (
        <Text style={styles.position}>{item.esn_fr}</Text>
      )}
      {lang === 'en' && item.esn_en && (
        <Text style={styles.position}>{item.esn_en}</Text>
      )}
      {/* POSITION */}
      {lang === 'fr' && item.position_fr && (
        <Text style={styles.position}>{item.position_fr}</Text>
      )}
      {lang === 'en' && item.position_en && (
        <Text style={styles.position}>{item.position_en}</Text>
      )}
      {/* DESCRIPTION */}
      {(item.stack ||
        item.description_fr ||
        item.description_en ||
        item.list_fr ||
        item.list_en) && (
        <View style={styles.plusButtonGroup}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ExperiencesDescription', {item: item})
            }>
            <Image source={IconPlus} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: '100%',
    marginTop: 20,
    paddingTop: 7.5,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
  },
  titleFav: {
    width: '100%',
    marginTop: 20,
    paddingTop: 7.5,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  position: {
    marginTop: 5,
    color: colors.greyDark,
    fontSize: 16,
  },
  plusButtonGroup: {
    marginTop: 2.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
