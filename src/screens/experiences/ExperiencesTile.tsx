import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import colors from '../../../assets/styles/colors';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {RootState} from '../../interfaces/mainData/reduxInterface';

export default function ExperiencesTile({item}) {
  const lang: RootState = useSelector(selectLang);

  return (
    <View style={styles.container}>
      {/* ROW 1 */}
      <View style={styles.row1}>
        <Text style={styles.title}>
          {lang === 'fr' ? item.firm_fr : item.firm_en}
        </Text>
      </View>
      {/* ROW 2 */}
      <View style={styles.row2}>
        <Text style={styles.title}>
          {lang === 'fr' ? item.firm_fr : item.firm_en}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  row1: {},
  row2: {},
  title: {
    width: '100%',
    display: 'flex',
    marginTop: 20,
    marginBottom: 7.5,
    paddingBottom: 5,
    borderBottomColor: colors.red,
    borderBottomWidth: 0.5,
    color: colors.red,
    fontSize: 18,
  },
  list: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
