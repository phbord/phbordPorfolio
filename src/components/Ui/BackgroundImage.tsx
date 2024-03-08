import React from 'react';
import {
  Image,
  ImageBackground,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';

interface BackgroundImageInterface {
  bgSource: string;
  profileSource: (
    props: ImageProps | Readonly<ImageProps>,
  ) => ImageSourcePropType | undefined;
  positionText: string;
  keyWordsText: any;
}

export default function BackgroundImage({
  bgSource,
  profileSource,
  positionText,
  keyWordsText,
}: BackgroundImageInterface) {
  return (
    <ImageBackground
      source={{uri: bgSource}}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.content}>
        <Image source={profileSource} style={styles.profile} />
        <View style={styles.textGroup}>
          <Text style={styles.positionText}>{positionText}</Text>
          <View style={styles.keyWordsContainer}>
            {keyWordsText?.map((text: string, index: React.Key | null | undefined) => (
              <Text key={index} style={styles.keyWordsText}>
                {text}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingHorizontal: spaces.containerSpaceX,
    backgroundColor: colors.greyDark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profile: {
    width: 50,
    height: 50,
    marginEnd: 7.5,
    borderRadius: 25,
  },
  textGroup: {
    maxWidth: 280,
    display: 'flex',
  },
  positionText: {
    color: colors.yellow,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  keyWordsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keyWordsText: {
    marginEnd: 2.5,
    color: colors.light,
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
  },
});
