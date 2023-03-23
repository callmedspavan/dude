import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AppText from '../AppText';
import defaultStyles from '../../Config/defaultStyles';

export default function PermissionDescribe({title, source, subTitle, style}) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.icon} source={source} resizeMode="contain" />
      <View style={styles.content}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: wp(9),
  },
  icon: {
    width: wp(8),
  },
  title: {
    fontSize: 14,
    color: defaultStyles.colors.black,
    letterSpacing: 2,
    marginBottom: hp(0.6),
  },
  subTitle: {
    fontSize: 12,
    color: defaultStyles.colors.light,
    letterSpacing: 0.3,
  },
});
