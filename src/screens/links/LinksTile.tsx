import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../interfaces/mainData/reduxInterface';
import {selectLang} from '../../services/store/features/langs/langSlice';
import {IconStar} from '../../../assets';
import colors from '../../../assets/styles/colors';

export default function LinksTile({item}) {
  const lang: RootState = useSelector(selectLang);

  const handlePress = () => {
    Linking.canOpenURL(item.url).then(() => {
      Linking.openURL(item.url);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={item.is_important ? styles.titleFav : styles.title}>
        {lang === 'fr' ? item.title_fr : item.title_en}
      </Text>
      <Text style={styles.subtitle}>
        {item.subtitle}
        {item.is_important && (
          <Image source={IconStar} style={styles.iconStar} />
        )}
      </Text>
      <Text style={styles.text}>
        {lang === 'fr' ? item.description_fr : item.description_en}
      </Text>
      {item.url && (
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.link}>{item.url}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    width: '100%',
    display: 'flex',
    marginTop: 25,
    paddingTop: 10,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
  },
  titleFav: {
    width: '100%',
    display: 'flex',
    marginTop: 25,
    paddingTop: 10,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    color: colors.red,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtitle: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.greyMiddle,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.greyDark,
    fontSize: 16,
  },
  link: {
    width: '100%',
    display: 'flex',
    marginTop: 5,
    color: colors.blueMiddle,
    fontSize: 16,
  },
  iconStar: {
    width: 20,
    height: 20,
  },
});
