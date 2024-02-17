import React, {ReactElement} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../../interfaces/mainData/reduxInterface';
import {ModalHeaderTileInterface} from '../../interfaces/mainData/modalHeaderTile';
import {close, selectMenu} from '../../services/store/features/menu/menuSlice';
import colors from '../../../assets/styles/colors';
import spaces from '../../../assets/styles/spaces';
import i18nData from '../../../assets/data/i18nData';
import ModalHeaderTile from './ModalHeaderTile';

export default function ModalHeaderNav(): ReactElement<any, any> {
  const dispatch: AppDispatch = useDispatch();
  const isMenuShowed: RootState = useSelector(selectMenu);
  const titleData = i18nData.t('header', {returnObjects: true});

  const renderItem = ({item, index}: ModalHeaderTileInterface): Element => {
    return <ModalHeaderTile item={item} index={index} />;
  };

  return (
    <Modal
      visible={isMenuShowed}
      animationType="fade"
      transparent
      supportedOrientations={['portrait-upside-down']}>
      <View style={styles.overlay}>
        <View style={styles.body}>
          <View style={styles.closeButtonGroup}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => dispatch(close())}>
              <Text>
                <Image
                  source={require('../../../assets/images/icons/icon-close.png')}
                  style={styles.closeButton}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            {/* LIST */}
            <FlatList
              data={titleData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 45,
    bottom: 0,
    left: 0,
    right: 0,
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
