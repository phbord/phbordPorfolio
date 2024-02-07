import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import getData from '../../services/getData';
import i18nData from '../../../assets/data/i18nData';
import {ImgProfile} from '../../../assets';
import bgImagesData from '../../../assets/images/backgrounds/bgImagesData';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import BackgroundImage from '../../components/Ui/BackgroundImage';
import KnowledgesDetails from './KnowledgesDetails';

export default function Knowledges({title, navigation}) {
  const keywordsData = i18nData.t('mainKeywords', {returnObjects: true});
  const options: object = {
    table: 'Knowledges',
    orderBy: 'order',
    ascending: true,
  };

  const fetchData = async () => {
    const data = await getData(options);
    console.log('data =======>', data);
  };

  const renderItem = ({item}) => {
    return <KnowledgesDetails item={item} navigation={navigation} />;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* BACKGROUND IMAGE */}
      <BackgroundImage
        bgSource={bgImagesData.map}
        profileSource={ImgProfile}
        positionText={i18nData.t('position')}
        keyWordsText={keywordsData}
      />
      <View style={styles.content}>
        {/* TITLE */}
        <Text style={styles.title}>{title}</Text>
        {/* LIST */}
        <FlatList
          data={fetchData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: spaces.containerSpaceX,
    paddingHorizontal: spaces.containerSpaceX,
  },
  title: {
    color: colors.red,
    fontSize: 25,
  },
});
