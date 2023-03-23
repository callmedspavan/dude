import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppButton from '../Components/AppButton';
import navigationRouteNames from '../Config/navigationRouteNames';

export default function SelfieScreen() {
  const [captured, setCaptured] = useState(false);
  const handleSubmit = () => {
    navigationRouteNames.navigate();
  };
  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={styles.headArea}>
          <AppText style={styles.heading}>One Selfie, Dude?</AppText>
          <View style={styles.headingUnder} />
        </View>

        <View style={styles.cameraView}>
          <View style={styles.notch}>
            <AppText style={styles.notchText}>
              During selfie, do not wear any of them mentioned!
            </AppText>
            <Ionicons name="ios-glasses-outline" style={styles.notchIcon} />
            <MaterialIcons name="masks" style={styles.notchIcon} />
          </View>
        </View>
        <View style={styles.camControl}>
          {captured && (
            <TouchableOpacity onPress={() => setCaptured(false)}>
              <View style={[styles.camButtonOut, {marginTop: hp(-4)}]}>
                <View style={styles.camButtonIn}>
                  <MaterialIcons name="rotate-left" style={styles.camIcon} />
                </View>
              </View>
            </TouchableOpacity>
          )}
          {!captured && (
            <TouchableOpacity onPress={() => setCaptured(true)}>
              <View style={styles.camButtonOut}>
                <View style={styles.camButtonIn}>
                  <MaterialIcons name="camera" style={styles.camIcon} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>

        {captured && (
          <AppButton
            title="Submit"
            onPress={handleSubmit}
            style={styles.button}
          />
        )}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
    paddingTop: hp(2),
    alignItems: 'center',
  },
  headArea: {
    width: '100%',
    alignItems: 'flex-start',
  },
  heading: {
    color: defaultStyles.colors.black,
    fontWeight: '500',
    letterSpacing: 1.5,
    marginTop: hp(3.5),
  },
  headingUnder: {
    height: hp(0.8),
    width: wp(9),
    backgroundColor: defaultStyles.colors.primary,
    marginTop: hp(1),
    borderRadius: 4,
    marginBottom: hp(1.5),
  },
  button: {
    bottom: hp(3.7),
    left: wp(7),
    position: 'absolute',
    zIndex: 2,
  },
  cameraView: {
    width: wp(100),
    height: hp(70),
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  camControl: {
    width: wp(150),
    height: wp(150),
    borderRadius: wp(80),
    backgroundColor: defaultStyles.colors.white,
    zIndex: 1,
    position: 'absolute',
    bottom: hp(-50),
    alignItems: 'center',
  },
  camButtonOut: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.primary,
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20),
    marginTop: hp(6),
    justifyContent: 'center',
    backgroundColor: defaultStyles.colors.white,
    alignItems: 'center',
  },
  camButtonIn: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(16),
    backgroundColor: defaultStyles.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camIcon: {
    fontSize: 35,
    color: defaultStyles.colors.white,
  },
  notch: {
    backgroundColor: defaultStyles.colors.white,
    padding: wp(7),
    borderRadius: wp(8),
    position: 'absolute',
    top: hp(-3),
    height: hp(12),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  notchText: {
    fontSize: 13.5,
    marginTop: hp(1),
  },
  notchIcon: {
    fontSize: 28,
    marginBottom: hp(1),
    color: '#000',
  },
});
