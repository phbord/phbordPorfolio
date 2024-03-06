import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {dowloadsCertificateInterface} from '../../interfaces/mainData/DownloadsCertificateInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {IconArrowLeft} from '../../../assets';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';

export default function ExperiencesDescription({route, navigation}: dowloadsCertificateInterface) {
  const lang: RootState = useSelector(selectLang);
  const {item} = route.params;

  const getListItem = (item, langItem) =>
    lang === langItem &&
    item &&
    item.map((itemList, index) => (
      <Text key={index} style={styles.text}>
        {itemList}
      </Text>
    ));

  return (
    <View style={styles.container}>
      {/* BACK BUTTON */}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={IconArrowLeft} style={styles.returnButton} />
        </TouchableOpacity>
      </View>
      {/* BODY */}
      <View>
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
        {/* Description */}
        <Text style={styles.project}>
          {lang === 'fr' ? item?.description_fr : item?.description_en}
        </Text>
        {/* List */}
        {getListItem(item.list_fr, 'fr')}
        {getListItem(item.list_en, 'en')}
        {/* Stack */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Stack :</Text> {item?.stack}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spaces.containerSpaceX,
    paddingHorizontal: spaces.containerSpaceX,
    paddingBottom: 60,
  },
  title: {
    width: '100%',
    maxWidth: 600,
    marginTop: 20,
    paddingTop: 7.5,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
  },
  titleFav: {
    width: '100%',
    maxWidth: 600,
    marginTop: 20,
    paddingTop: 7.5,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    maxWidth: 600,
    marginTop: 5,
    color: colors.greyDark,
    fontSize: 16,
  },
  project: {
    maxWidth: 600,
    marginVertical: 5,
    color: colors.greyDark,
    fontSize: 18,
  },
  position: {
    maxWidth: 600,
    marginTop: 5,
    marginBottom: 15,
    color: colors.greyDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  returnButton: {
    width: 30,
    height: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
});
