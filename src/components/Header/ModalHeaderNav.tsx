import React, {ReactElement, SetStateAction, useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Action, Dispatch} from 'redux';

import {AppDispatch, RootState} from '../../interfaces/mainData/reduxInterface';
import {ModalHeaderTileInterface} from '../../interfaces/mainData/modalHeaderTile';
import {
  closeModal,
  selectMenu,
} from '../../services/store/features/menu/menuSlice';
import {selectLang} from '../../services/store/features/langs/langSlice';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import i18nData from '../../../assets/data/i18nData';
import ModalHeaderTile from './ModalHeaderTile';
import ButtonHeadeLang from './ButtonHeaderLang';
import ButtonHeaderNav from './ButtonHeaderNav';

export default function ModalHeaderNav(): ReactElement<any, any> {
  const [page, setPage]: [undefined, Dispatch<Action<string>>] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const isMenuShowed: RootState = useSelector(selectMenu);
  const lang: RootState = useSelector(selectLang);
  i18nData.locale = lang === 'fr' ? 'fr' : 'en';
  const [titleData, setTitleData]: [string, Dispatch<SetStateAction<string>>] =
    useState(i18nData.t('header', {returnObjects: true}));

  const renderItem = ({item, index}: ModalHeaderTileInterface): Element => {
    return <ModalHeaderTile item={item} index={index} />;
  };

  const onEndReached = (): void => {
    // charger des nouvelles recettes en arrivant en bas de la page
    setPage(currPage => currPage + 1);
  };

  useEffect(() => {
    setTitleData(i18nData.t('header', {returnObjects: true}));
  }, [lang]);

  return (
    <Modal
      visible={isMenuShowed}
      animationType="fade"
      transparent
      supportedOrientations={['portrait-upside-down']}>
      {/* BUTTON GROUP */}
      <View style={styles.containerButtons}>
        <ButtonHeadeLang />
        <ButtonHeaderNav />
      </View>
      {/* CONTENT */}
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => dispatch(closeModal())}>
        <View style={styles.body}>
          <View style={styles.list}>
            {/* LIST */}
            <FlatList
              data={titleData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              onEndReached={onEndReached}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerButtons: {
    paddingVertical: 5,
    paddingHorizontal: spaces.containerSpaceX,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 45,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  body: {
    backgroundColor: colors.greyMiddle,
    shadowColor: colors.dark,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  closeButtonGroup: {
    marginRight: 7.5,
    paddingTop: spaces.containerSpaceX,
    paddingBottom: 5,
    paddingHorizontal: spaces.containerSpaceX,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  closeButton: {
    paddingHorizontal: 2,
    paddingBottom: 5,
    borderRadius: 12.5,
    backgroundColor: colors.greyLight,
  },
  list: {
    borderTopColor: colors.greyDark,
    borderBottomColor: colors.greyDark,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
});
