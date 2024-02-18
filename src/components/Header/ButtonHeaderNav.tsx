import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {AppDispatch} from '../../interfaces/mainData/reduxInterface';
import colors from '../../../assets/styles/colors';
import {IconBurgerMenu} from '../../../assets';
import {toogleModal} from '../../services/store/features/menu/menuSlice';

export default function ButtonHeaderNav() {
  //const isMenuShowed: RootState = useSelector(selectMenu);
  const dispatch: AppDispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(toogleModal())}>
      <Image source={IconBurgerMenu} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 7.5,
    padding: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.light,
    color: colors.red,
  },
});
