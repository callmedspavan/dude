import React from 'react';
import {Modal, StyleSheet, TouchableHighlight, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AppScreen from './AppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../Config/defaultStyles';

export default function AppModel({
  children,
  modelEnable,
  setModelEnable,
  style,
}) {
  return (
    <Modal visible={modelEnable} animationType="slide">
      <AppScreen>
        <View
          style={[styles.screen, style]}
          showsVerticalScrollIndicator={false}>
          {children}
          <TouchableHighlight
            onPress={() => setModelEnable(false)}
            style={styles.closeButton}>
            <MaterialCommunityIcons name="close" style={styles.closeIcon} />
          </TouchableHighlight>
        </View>
      </AppScreen>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    padding: wp(7),
    paddingBottom: hp(11),
  },
  closeButton: {
    backgroundColor: defaultStyles.colors.black,
    position: 'absolute',
    width: wp(13),
    height: wp(13),
    borderRadius: wp(9),
    bottom: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 19,
    color: defaultStyles.colors.white,
  },
});
