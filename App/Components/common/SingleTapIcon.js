import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import defaultStyles from '../../Config/defaultStyles';

import AppText from '../AppText';

export default function SingleTapIcon({onPress, image, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image
          source={{
            uri: image,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <AppText numberOfLines={2} style={styles.text}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: wp(12),
    height: hp(11),
    alignItems: 'center',
    marginLeft: wp(6),
  },
  image: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(3),
  },
  text: {
    fontSize: 11.5,
    textAlign: 'center',
    marginTop: hp(1.5),
  },
});
