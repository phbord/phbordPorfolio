import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Link} from '@react-navigation/native';

import {ModalHeaderTileInterface} from '../../interfaces/mainData/modalHeaderTile';
import dataHeader from '../../../assets/data/dataHeader';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';

export default function ModalHeaderTile({
  item,
  index,
}: ModalHeaderTileInterface): Element {
  return (
    <Link to={{screen: dataHeader[index]}} style={styles.link}>
      <Text style={styles.text}>{item.name}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    paddingVertical: 10,
    paddingHorizontal: spaces.containerSpaceX,
    borderBottomColor: colors.greyDark,
    borderBottomWidth: 0.5,
    color: colors.greyDark,
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
  },
});
