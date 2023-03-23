import React, {useState} from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import * as yup from 'yup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppForm from '../Components/formComponents/AppForm';
import AppFormField from '../Components/formComponents/AppFormField';
import AppFormSubmitButton from '../Components/formComponents/AppFormSubmitButton';

const AadharNumberEnterScreen = ({navigation, route}) => {
  const Schema = yup.object().shape({
    aadharNumber: yup
      .string()
      .required()
      .matches(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/),
    captcha: yup.string().required(),
  });

  const handleSubmit = values => {
    // calling Backend
    navigation.navigate(routeName.AADHAR_OTP_ENTER_SCREEN);
  };

  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppText style={styles.heading}>Verify Aadhar via OTP</AppText>
        <View style={styles.headingUnder}></View>

        <AppForm
          initialValues={{aadharNumber: '', captcha: ''}}
          validationSchema={Schema}
          onSubmit={values => handleSubmit(values)}>
          <AppFormField
            style={styles.input}
            name="aadharNumber"
            startText="#"
            placeholder="Enter your Aadhar number"
            preCheck={true}
            keyboardType="number-pad"
            maxLength={12}
          />
          <AppFormField
            style={styles.input}
            name="captcha"
            startIcon="image-search"
            placeholder="Enter captcha shown below"
            maxLength={18}
          />
          <AppFormSubmitButton style={styles.button} title="Send OTP" />
        </AppForm>
        <View style={styles.captchaContainer}>
          <Image
            resizeMode="contain"
            source={require('../Assets/captcha.png')}
            style={styles.captcha}
          />
          <TouchableWithoutFeedback onPress={() => console.log('Re Captcha')}>
            <SimpleLineIcons style={styles.reloadIcon} name="reload" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
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
  input: {
    marginVertical: hp(1.5),
  },
  captchaContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  captcha: {
    width: wp(40),
    marginRight: wp(3),
  },
  reloadIcon: {
    fontSize: 25,
    marginRight: wp(5),
    color: defaultStyles.colors.medium,
  },
});

export default AadharNumberEnterScreen;
