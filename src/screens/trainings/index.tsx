import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Action, Dispatch} from 'redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import getData from '../../services/getData';
import {optionsTrainings} from '../../services/optionsData';
import i18nData from '../../../assets/data/i18nData';
import {ImgProfile} from '../../../assets';
import bgImagesData from '../../../assets/images/backgrounds/bgImagesData';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import BackgroundImage from '../../components/Ui/BackgroundImage';
import TrainingsTile from './TrainingsTile';
import Footer from '../../components/Footer';

export default function Trainings({navigation}: any) {
  const [isLoading, setIsLoading]: [undefined, boolean] = useState(true);
  const [data, setData]: [undefined, Dispatch<Action<string>>] = useState();
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';
  const keywordsData: string = i18nData.t('mainKeywords', {
    returnObjects: true,
  });
  const titleData: string = i18nData.t('header', {returnObjects: true});

  const fetchData = async (): Promise<string[]> => {
    setData(await getData(optionsTrainings));
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.red} />
        </View>
      ) : (
        <ScrollView>
          {/* BACKGROUND IMAGE */}
          <BackgroundImage
            bgSource={bgImagesData.oldCity}
            profileSource={ImgProfile}
            positionText={i18nData.t('position')}
            keyWordsText={keywordsData}
          />
          <View style={styles.content}>
            {/* TITLE */}
            <Text style={styles.title}>{titleData[2].name}</Text>
            {/* LIST */}
            {data?.map((item: any, index: React.Key | null | undefined) => (
              <TrainingsTile key={index} item={item} navigation={navigation} />
            ))}
          </View>
          {/* FOOTER */}
          <Footer />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: spaces.containerSpaceX,
    paddingHorizontal: spaces.containerSpaceX,
    paddingBottom: 60,
  },
  title: {
    color: colors.red,
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
  },
});
