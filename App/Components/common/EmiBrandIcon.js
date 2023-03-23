import React from 'react';
import {Image, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import defaultStyles from '../../Config/defaultStyles';

import AppText from '../../Components/AppText';

export default function EmiBrandIcon({style, title, image, onPress, headTag}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        {headTag && (
          <View style={styles.head}>
            <AppText style={styles.headText}>{headTag}</AppText>
          </View>
        )}
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(22.5),
    height: hp(17),
    alignItems: 'center',
  },
  image: {
    width: wp(17.5),
    height: wp(17.5),
    borderRadius: wp(4),
    borderWidth: wp(0.1),
    borderColor: defaultStyles.colors.light,
    backgroundColor: defaultStyles.colors.white,
  },
  title: {
    fontSize: 12.5,
    textAlign: 'center',
    color: defaultStyles.colors.dark,
    marginTop: hp(1.2),
    padding: wp(1),
  },
  head: {
    position: 'absolute',
    zIndex: 1,
    top: hp(-1.8),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(1.8),
    backgroundColor: '#FFE600',
    width: '83%',
    borderRadius: 3,
  },
  headText: {
    fontSize: 9.4,
  },
});
