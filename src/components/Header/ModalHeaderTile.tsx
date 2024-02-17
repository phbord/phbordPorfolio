import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Link} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {ModalHeaderTileInterface} from '../../interfaces/mainData/modalHeaderTile';
import {AppDispatch} from '../../interfaces/mainData/reduxInterface';
import {close} from '../../services/store/features/menu/menuSlice';
import dataHeader from '../../../assets/data/dataHeader';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';

export default function ModalHeaderTile({
  item,
  index,
}: ModalHeaderTileInterface): Element {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Link
      to={{screen: dataHeader[index]}}
      onPress={() => dispatch(close())}
      style={styles.link}>
      <Text style={styles.text}>{item.name}</Text>
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
