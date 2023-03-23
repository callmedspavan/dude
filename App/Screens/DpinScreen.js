import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppKeyboard from '../Components/AppKeyboard';

export default function DpinScreen() {
  const [pin, setPin] = useState('');

  const handleLogout = () => {
    // logout logic here
  };

  useEffect(() => {
    if (pin.length === 4) {
      setTimeout(() => {
        setPin('');
      }, 500);
    }
  }, [pin]);

  return (
    <AppScreen>
      <View style={styles.screen}>
        <TouchableWithoutFeedback onPress={handleLogout}>
          <View style={styles.logButton}>
            <AntDesign name="poweroff" style={styles.logIcon} />
            <AppText style={styles.logText}>Logout</AppText>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.head}>
          <AppText style={styles.title}>hi! Dude</AppText>
          <AppText style={styles.subTitle}>callmedspavan@gmail.com</AppText>
        </View>
        <View style={styles.pinBlock}>
          <View
            style={pin.length >= 1 ? styles.pinActive : styles.pinInactive}
          />
          <View
            style={pin.length >= 2 ? styles.pinActive : styles.pinInactive}
          />
          <View
            style={pin.length >= 3 ? styles.pinActive : styles.pinInactive}
          />
          <View
            style={pin.length >= 4 ? styles.pinActive : styles.pinInactive}
          />
        </View>
        <AppKeyboard
          inputValue={pin}
          setInputValue={setPin}
          maxLength={4}
          style={styles.keyboard}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  // Head  Styling
  head: {
    marginTop: hp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: defaultStyles.colors.dark,
    letterSpacing: 1.5,
  },
  subTitle: {
    fontSize: 14,
    marginTop: hp(1),
    color: defaultStyles.colors.medium,
    letterSpacing: 1,
  },
  // Pin Input styling
  pinBlock: {
    marginTop: hp(8),
    height: hp(5),
    width: wp(45),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinInactive: {
    width: wp(3.5),
    height: wp(3.5),
    borderRadius: wp(5),
    backgroundColor: defaultStyles.colors.light,
  },
  pinActive: {
    width: wp(4.5),
    height: wp(4.5),
    borderRadius: wp(5),
    backgroundColor: defaultStyles.colors.primary,
  },
  keyboard: {
    marginTop: hp(10),
  },
  // log button Style
  logButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: wp(5),
    top: hp(1),
  },
  logIcon: {
    fontSize: 25,
    color: defaultStyles.colors.primary,
  },
  logText: {
    fontSize: 12,
    marginTop: hp(1),
    color: defaultStyles.colors.medium,
  },
});
