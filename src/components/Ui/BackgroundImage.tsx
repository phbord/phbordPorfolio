import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';

export default function BackgroundImage({
  bgSource,
  profileSource,
  positionText,
  keyWordsText,
}) {
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
            {keyWordsText?.map((text: string, index: React.Key) => (
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  keyWordsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keyWordsText: {
    marginEnd: 2.5,
    color: colors.light,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
