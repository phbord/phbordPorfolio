import React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import colors from '../../../assets/styles/colors';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {RootState} from '../../interfaces/mainData/reduxInterface';
import KnowledgesList from './KnowledgesList';

export default function KnowledgesTile({item, navigation}) {
  const lang: RootState = useSelector(selectLang);

  const renderItem = ({item}) => {
    return <KnowledgesList item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {lang === 'fr' ? item.title_fr : item.title_en}
      </Text>
      {/* LIST */}
      <View style={styles.list}>
        <FlatList
          data={item.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={styles.flatList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flatList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    marginTop: 20,
    marginBottom: 7.5,
    paddingBottom: 5,
    borderBottomColor: colors.red,
    borderBottomWidth: 0.5,
    color: colors.red,
    fontSize: 18,
  },
});
