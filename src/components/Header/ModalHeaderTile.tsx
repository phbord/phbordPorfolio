import React from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Link} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {ModalHeaderTileInterface} from '../../interfaces/mainData/modalHeaderTile';
import {AppDispatch} from '../../interfaces/mainData/reduxInterface';
import {closeModal} from '../../services/store/features/menu/menuSlice';
import dataHeader from '../../../assets/data/dataHeader';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';

export default function ModalHeaderTile({
  item,
  index,
}: ModalHeaderTileInterface): Element {
  const dispatch: AppDispatch = useDispatch();

  const TextBlock: React.JSX.Element = (
    <Text style={styles.text}>{item.name}</Text>
  );

  const handlePress = () => {
    Linking.canOpenURL(item.href).then(() => {
      Linking.openURL(item.href);
    });
  };

  return item.isDownload ? (
    <TouchableOpacity onPress={handlePress} style={styles.link}>
      {TextBlock}
    </TouchableOpacity>
  ) : (
    <Link
      to={{screen: dataHeader[index]}}
      onPress={() => dispatch(closeModal())}
      style={styles.link}>
      {TextBlock}
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    paddingVertical: 7.5,
    paddingHorizontal: spaces.containerSpaceX,
    borderBottomColor: colors.greyDark,
    borderBottomWidth: 1,
  },
  text: {
    color: colors.greyDark,
    fontSize: 18,
    fontWeight: '300',
  },
});
