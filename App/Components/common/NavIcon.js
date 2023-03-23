import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import defaultStyles from '../../Config/defaultStyles';

import AppText from '../AppText';

export default function NavIcon({
  name,
  iconImage,
  onPress,
  highlight,
  headTag,
}) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      {headTag && (
        <View style={styles.head}>
          <AppText style={styles.headText}>{headTag}</AppText>
        </View>
      )}
      {highlight && !headTag && <View style={styles.highlightDot} />}
      <View style={styles.iconOut}>
        <View style={styles.iconInCircle} />
        <Image source={iconImage} style={styles.icon} resizeMode="contain" />
      </View>
      <AppText style={styles.iconText}>{name}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: wp(14),
    height: hp(9.2),
    alignItems: 'center',
  },
  highlightDot: {
    position: 'absolute',
    backgroundColor: '#01BD9C',
    width: 7,
    height: 7,
    borderRadius: 10,
    right: wp(1),
    top: hp(0.1),
    zIndex: 2,
  },
  iconOut: {
    width: wp(11.4),
    height: wp(11.4),
    borderRadius: 17,
    backgroundColor: defaultStyles.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInCircle: {
    width: wp(5.3),
    height: wp(5.3),
    borderRadius: 10,
    backgroundColor: '#FF7078',
    position: 'absolute',
    right: wp(1.2),
    bottom: hp(0.4),
    opacity: 0.8,
  },
  iconText: {
    fontSize: 10,
    letterSpacing: 0.35,
    textAlign: 'center',
    color: defaultStyles.colors.black,
    marginTop: hp(1.2),
  },
  icon: {
    height: wp(5.5),
    width: wp(5.5),
  },
  head: {
    position: 'absolute',
    zIndex: 1,
    top: hp(-1),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(1.7),
    backgroundColor: '#FFE600',
    width: '100%',
    borderRadius: 2,
  },
  headText: {
    fontSize: 9.4,
    fontWeight: 'bold',
  },
});
