import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import getData from '../../services/getData';
import {optionsExperiences} from '../../services/optionsData';
import i18nData from '../../../assets/data/i18nData';
import {ImgProfile} from '../../../assets';
import bgImagesData from '../../../assets/images/backgrounds/bgImagesData';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import BackgroundImage from '../../components/Ui/BackgroundImage';
import ExperiencesTile from './ExperiencesTile';
import Footer from '../../components/Footer';

export default function Experiences({navigation}) {
  const [data, setData] = useState();
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';
  const keywordsData = i18nData.t('mainKeywords', {returnObjects: true});
  const titleData = i18nData.t('header', {returnObjects: true});

  const fetchData = async () => {
    setData(await getData(optionsExperiences));
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* BACKGROUND IMAGE */}
        <BackgroundImage
          bgSource={bgImagesData.modernTown}
          profileSource={ImgProfile}
          positionText={i18nData.t('position')}
          keyWordsText={keywordsData}
        />
        <View style={styles.content}>
          {/* TITLE */}
          <Text style={styles.title}>{titleData[1].name}</Text>
          {/* LIST */}
          {data?.map((item, index) => (
            <ExperiencesTile key={index} item={item} navigation={navigation} />
          ))}
        </View>
        {/* FOOTER */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: spaces.containerSpaceX,
    paddingHorizontal: spaces.containerSpaceX,
    paddingBottom: 60,
  },
  title: {
    color: colors.red,
    fontSize: 25,
  },
});
