import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Action, Dispatch} from 'redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import i18nData from '../../../assets/data/i18nData';
import {ImgProfile, IconThunder} from '../../../assets';
import bgImagesData from '../../../assets/images/backgrounds/bgImagesData';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import BackgroundImage from '../../components/Ui/BackgroundImage';
import Footer from '../../components/Footer';

export default function ObliquesStrategies() {
  const [data, setData]: [undefined, Dispatch<Action<string>>] = useState();
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';
  const keywordsData: string = i18nData.t('mainKeywords', {returnObjects: true});
  const titleData: string = i18nData.t('header', {returnObjects: true});
  const [sentence, setSentence]: [undefined, Dispatch<Action<string>>] = useState('');

  const createRandomSentence = () => {
    const data = i18nData.t('strategiesObliques', {returnObjects: true});
    const random = Math.floor(Math.random() * data.length);
    setSentence(data[random]);
  };

  useEffect(() => {
    createRandomSentence();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* BACKGROUND IMAGE */}
        <BackgroundImage
          bgSource={bgImagesData.fuji}
          profileSource={ImgProfile}
          positionText={i18nData.t('position')}
          keyWordsText={keywordsData}
        />
        <View style={styles.content}>
          {/* TITLE */}
          <Text style={styles.title}>{titleData[5].name}</Text>
          {/* RANDOM */}
          <Text style={styles.sentence}>"{sentence}"</Text>
          {/* BUTTON GROUP */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => createRandomSentence()}
              style={styles.button}>
              <Image source={IconThunder} style={styles.icon} />
              <Text style={styles.buttonText}>
                {i18nData.t('strategiesObliquesButton')}
              </Text>
            </TouchableOpacity>
          </View>
          {/* RESUME GROUP */}
          <View style={styles.resumeGroup}>
            {/* SUBTITLE */}
            <Text style={styles.subtitle}>
              {i18nData.t('strategiesObliquesChapo')}
            </Text>
            {/* RESUME */}
            <Text style={styles.resume}>
              {i18nData.t('strategiesObliquesParagraph')}
            </Text>
          </View>
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
    maxWidth: 600,
    marginTop: spaces.containerSpaceX,
    paddingHorizontal: spaces.containerSpaceX,
    paddingBottom: 60,
  },
  title: {
    marginBottom: 15,
    color: colors.red,
    fontSize: 25,
  },
  subtitle: {
    marginBottom: 5,
    color: colors.red,
    fontSize: 18,
  },
  sentence: {
    minHeight: 140,
    marginBottom: 15,
    color: colors.blueDark,
    fontSize: 35,
    fontWeight: '600',
  },
  resumeGroup: {
    padding: 10,
    borderColor: colors.red,
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  resume: {
    color: colors.blueDark,
    fontSize: 16,
  },
  buttonGroup: {
    marginTop: 15,
    marginBottom: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 7.5,
    paddingHorizontal: spaces.containerSpaceX,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  buttonText: {
    color: colors.light,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 2.5,
  },
});
