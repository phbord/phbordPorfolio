import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
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
}: ModalHeaderTileInterface): ReactNode {
  const dispatch: AppDispatch = useDispatch();

  const TextBlock: React.JSX.Element = (
    <Text style={styles.text}>{item.name}</Text>
  );

  return (
    !item.isNotMenu && (
      <Link
        to={{screen: dataHeader[index]}}
        onPress={() => dispatch(closeModal())}
        style={styles.link}>
        {TextBlock}
      </Link>
    )
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
    fontFamily: 'Roboto-Light',
  },
});
