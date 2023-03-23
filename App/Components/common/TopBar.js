import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../../Components/AppText';
import defaultStyles from '../../Config/defaultStyles';

export default function TopBar({onPress, title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <MaterialCommunityIcons name="keyboard-backspace" style={styles.icon} />
      </TouchableOpacity>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    width: wp(100),
    position: 'absolute',
    backgroundColor: defaultStyles.colors.white,
    top: 0,
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: defaultStyles.colors.dark,
        shadowRadius: 6,
        shadowOpacity: 0.04,
        shadowOffset: {width: 0, height: 10},
      },
      android: {
        elevation: 20,
      },
    }),
  },
  title: {
    fontSize: 16,
    marginBottom: hp(1),
  },
  iconContainer: {
    position: 'absolute',
    left: wp(8),
    bottom: hp(1.8),
  },
  icon: {
    fontSize: 35,
    color: defaultStyles.colors.primary,
  },
});
