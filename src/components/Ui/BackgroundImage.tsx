import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

export default function BackgroundImage({
  bgSource,
  profileSource,
  positionText,
  keyWordsText,
}) {
  return (
    <View>
      <ImageBackground
        source={{uri: bgSource}}
        resizeMode="cover"
        style={styles.container}>
        <Image source={profileSource} style={styles.profile} />
        <View style={styles.groupText}>
          <Text style={styles.positionText}>{positionText}</Text>
          <Text style={styles.keyWordsText}>{keyWordsText}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  groupText: {},
  positionText: {},
  keyWordsText: {},
});
