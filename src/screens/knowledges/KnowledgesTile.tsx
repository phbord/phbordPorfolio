import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import colors from '../../../assets/styles/colors';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {RootState} from '../../interfaces/mainData/reduxInterface';
import KnowledgesList from './KnowledgesList';

export default function KnowledgesTile({item}) {
  const lang: RootState = useSelector(selectLang);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {lang === 'fr' ? item.title_fr : item.title_en}
      </Text>
      {/* LIST */}
      <View style={styles.list}>
        {item.list.map((itemList: any, index: React.Key | null | undefined) => (
          <KnowledgesList key={index} item={itemList} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    width: '100%',
    display: 'flex',
    marginTop: 20,
    marginBottom: 7.5,
    paddingBottom: 5,
    borderBottomColor: colors.red,
    borderBottomWidth: 0.5,
    color: colors.red,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  list: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
