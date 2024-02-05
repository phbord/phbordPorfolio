import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import i18nData from '../../../assets/data/i18nData';
import {BgMap, ImgProfile} from '../../../assets';
import bgImagesData from '../../../assets/images/backgrounds/bgImagesData';
import BackgroundImage from '../../components/Ui/BackgroundImage';

export default function Knowledges() {
  return (
    <View>
      <BackgroundImage
        bgSource={bgImagesData.map}
        profileSource={ImgProfile}
        positionText={i18nData.t('position')}
        keyWordsText={i18nData.t('firstName')}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Knowledges item</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
});
