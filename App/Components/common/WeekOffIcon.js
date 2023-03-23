import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import defaultStyles from '../../Config/defaultStyles';

import AppText from '../AppText';

export default function WeekOffIcon({name, brandImage, onPress, headTag}) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      {headTag && (
        <View style={styles.head}>
          <AppText style={styles.headText}>{headTag}</AppText>
        </View>
      )}
      <View style={styles.iconOut}>
        <Image
          source={{uri: brandImage}}
          style={styles.brandImage}
          resizeMode="cover"
        />
      </View>
      <AppText style={styles.iconText}>{name}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: wp(18),
    height: hp(8.5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconOut: {
    width: wp(11),
    height: wp(11),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconText: {
    fontSize: 10,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: defaultStyles.colors.black,
    marginTop: hp(0.85),
  },
  brandImage: {
    width: '100%',
    height: '100%',
  },
  head: {
    position: 'absolute',
    zIndex: 1,
    top: hp(-1),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(1.7),
    backgroundColor: '#FFE600',
    width: '80%',
    borderRadius: 2,
  },
  headText: {
    fontSize: 9.4,
    fontWeight: 'bold',
  },
});
