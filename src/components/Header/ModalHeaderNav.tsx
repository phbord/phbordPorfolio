import React, {ReactElement} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  FlatList,
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
    <Modal visible={isMenuShowed} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.closeButtonGroup}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => dispatch(close())}>
            <Text>X</Text>
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
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    backgroundColor: colors.greyMiddle,
  },
  closeButtonGroup: {
    paddingTop: spaces.containerSpaceX,
    paddingHorizontal: spaces.containerSpaceX,
    alignItems: 'flex-end',
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  list: {},
});
