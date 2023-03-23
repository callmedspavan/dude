import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppButton from '../Components/AppButton';

export default function CibilResultScreen({navigation, route}) {
  const [cibil, setCibil] = useState(300);

  const handleSubmit = () => {
    navigation.navigate(routeName.AADHAR_NUMBER_ENTER_SCREEN);
    navigation.reset({
      index: 0,
      routes: [{name: routeName.AADHAR_NUMBER_ENTER_SCREEN}],
    });
  };

  viewCibil = 798;

  useEffect(() => {
    const timerId = setInterval(() => {
      if (cibil > viewCibil) {
        clearInterval(timerId);
      } else {
        setCibil(cibil + 1);
      }
    }, 0);
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={styles.headArea}>
          <AppText style={styles.heading}>
            How good is your Cibil Score?
          </AppText>
          <View style={styles.headingUnder} />
        </View>

        <View style={styles.cibilResultArea}>
          <ImageBackground
            source={require('../Assets/meter.png')}
            resizeMode="contain"
            style={styles.cibilMeter}>
            <AppText style={styles.cibilResult}>{cibil}</AppText>
          </ImageBackground>
          <AppText style={styles.cibilDescribe}>
            Your credit score is better than 52% of dude members.
          </AppText>
        </View>

        <AppText style={styles.heading}>Excellent!</AppText>
        <View style={[styles.headingUnder, {height: hp(0.5)}]} />

        <View style={[styles.poweredbyArea, {flexDirection: 'row'}]}>
          <AppText style={styles.poweredbyText}>Powered by </AppText>
          <Image
            source={require('../Assets/poweredby.png')}
            style={styles.poweredbyImage}
            resizeMode="contain"
          />
        </View>

        <AppButton
          title="Submit"
          onPress={handleSubmit}
          style={styles.button}
        />
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
    marginBottom: hp(4),
  },
  button: {
    bottom: hp(2),
    left: wp(7),
    position: 'absolute',
  },
  cibilResultArea: {
    backgroundColor: '#FFF1F2',
    height: hp(50),
    width: '80%',
    marginBottom: hp(1),
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: wp(11),
  },
  cibilDescribe: {
    fontSize: 14,
    textAlign: 'center',
    color: defaultStyles.colors.dark,
  },
  cibilMeter: {
    width: wp(50),
    height: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cibilResult: {
    fontSize: 30,
  },
  poweredbyArea: {
    position: 'absolute',
    bottom: hp(9.5),
  },
  poweredbyText: {
    fontSize: 11,
    color: defaultStyles.colors.light,
  },
  poweredbyImage: {
    width: wp(12),
    marginLeft: wp(2),
  },
});
