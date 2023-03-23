import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../AppText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import defaultStyles from '../../Config/defaultStyles';

export default function Contact({name, number, iconText}) {
  return (
    <View style={styles.contact}>
      <View style={styles.iconArea}>
        <AppText style={styles.iconText}>{iconText}</AppText>
      </View>
      <View style={styles.desc}>
        <AppText style={styles.title}>{name}</AppText>
        <AppText style={styles.subTitle}>{number}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contact: {
    width: '100%',
    height: hp(6),
    flexDirection: 'row',
  },
  iconArea: {
    width: wp(12.5),
    height: wp(12.5),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.primary,
    borderBottomRightRadius: 7,
  },
  iconText: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    letterSpacing: 1,
  },
  desc: {
    marginLeft: wp(6),
    justifyContent: 'center',
  },
  title: {
    fontSize: 14.5,
    color: defaultStyles.colors.dark,
  },
  subTitle: {
    fontSize: 11.5,
    marginTop: hp(0.6),
    letterSpacing: 1,
    color: defaultStyles.colors.medium,
  },
});
