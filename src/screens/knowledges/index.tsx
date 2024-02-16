import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import getData from '../../services/getData';
import {optionsKnowledges} from '../../services/optionsData';
import i18nData from '../../../assets/data/i18nData';
import {ImgProfile} from '../../../assets';
import bgImagesData from '../../../assets/images/backgrounds/bgImagesData';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import BackgroundImage from '../../components/Ui/BackgroundImage';
import KnowledgesTile from './KnowledgesTile';

export default function Knowledges({title, navigation}) {
  const [data, setData] = useState();
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';
  const keywordsData = i18nData.t('mainKeywords', {returnObjects: true});
  const titleData = i18nData.t('header', {returnObjects: true});

  const fetchData = async () => {
    setData(await getData(optionsKnowledges));
    //console.log('data[0] =======>', data[0]);
    return data;
  };

  const renderItem = ({item}) => {
    return <KnowledgesTile item={item} navigation={navigation} />;
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
        <Text style={styles.title}>{titleData[0].name}</Text>
        {/* LIST */}
        <FlatList
          data={data}
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
    //paddingBottom: 160,
  },
  title: {
    color: colors.red,
    fontSize: 25,
  },
});
