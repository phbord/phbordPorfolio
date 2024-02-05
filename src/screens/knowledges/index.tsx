import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import i18nData from '../../../assets/data/i18nData';
import {ImgProfile} from '../../../assets';
import bgImagesData from '../../../assets/images/backgrounds/bgImagesData';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import BackgroundImage from '../../components/Ui/BackgroundImage';

export default function Knowledges({title}) {
  const keywordsData = i18nData.t('mainKeywords', {returnObjects: true});

  return (
    <View style={styles.container}>
      <BackgroundImage
        bgSource={bgImagesData.map}
        profileSource={ImgProfile}
        positionText={i18nData.t('position')}
        keyWordsText={keywordsData}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
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
