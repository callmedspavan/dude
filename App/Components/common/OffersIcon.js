import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import defaultStyles from '../../Config/defaultStyles';

import AppText from '../AppText';

export default function OffersIcon({onPress, image, title, description}) {
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
        <AppText numberOfLines={2} style={styles.description}>
          {description}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    borderColor: defaultStyles.colors.medium,
    borderRadius: wp(3),
    borderWidth: 1,
    height: wp(35),
    justifyContent: 'center',
    marginLeft: wp(5.5),
    paddingHorizontal: wp(2),
    width: wp(29),
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    width: wp(10.5),
    height: wp(10.5),
    borderRadius: wp(3),
  },
  text: {
    fontSize: 10,
    color: defaultStyles.colors.medium,
    textAlign: 'center',
    marginTop: hp(1),
  },
  description: {
    marginTop: hp(2),
    fontSize: 12.5,
  },
});
