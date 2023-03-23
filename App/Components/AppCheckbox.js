import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import defaultStyles from '../Config/defaultStyles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppCheckbox({checked, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={checked ? styles.checkboxActive : styles.checkboxInactive}>
      <MaterialCommunityIcons
        name="check"
        style={
          checked ? styles.checkboxActiveIcon : styles.checkboxInactiveIcon
        }
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkboxActive: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(4.3),
    height: wp(4.3),
    borderRadius: 3,
    borderWidth: wp(0.3),
    borderColor: defaultStyles.colors.primary,
    backgroundColor: defaultStyles.colors.primary,
  },
  checkboxActiveIcon: {
    color: defaultStyles.colors.white,
    fontSize: 14,
  },
  checkboxInactive: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(4.3),
    height: wp(4.3),
    borderWidth: wp(0.3),
    borderRadius: 3,
    borderColor: defaultStyles.colors.light,
    backgroundColor: defaultStyles.colors.white,
  },
  checkboxInactiveIcon: {
    display: 'none',
  },
});
