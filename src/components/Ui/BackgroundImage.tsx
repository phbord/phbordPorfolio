import React, {useState} from 'react';
import {
  ActivityIndicator,
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
  const [isLoading, setIsLoading]: [undefined, boolean] = useState(true);

  return (
    <ImageBackground
      source={{uri: bgSource}}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.content}>
        <Image
          source={profileSource}
          style={styles.profile}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
        <View style={styles.textGroup}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.red} />
            </View>
          ) : (
            <>
              <Text style={styles.positionText}>{positionText}</Text>
              <View style={styles.keyWordsContainer}>
                {keyWordsText?.map(
                  (text: string, index: React.Key | null | undefined) => (
                    <Text key={index} style={styles.keyWordsText}>
                      {text}
                    </Text>
                  ),
                )}
              </View>
            </>
          )}
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
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
