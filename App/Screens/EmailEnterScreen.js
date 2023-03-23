import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppForm from '../Components/formComponents/AppForm';
import AppFormField from '../Components/formComponents/AppFormField';
import AppFormSubmitButton from '../Components/formComponents/AppFormSubmitButton';
import AppCheckbox from '../Components/AppCheckbox';

const EmailEnterScreen = ({navigation, route}) => {
  const [emailUpdates, setEmailUpdates] = useState(0);
  const Schema = yup.object().shape({
    email: yup.string().required().email(),
  });

  const handleSubmit = (values, emailUpdates) => {
    // calling Backend
    navigation.navigate(routeName.EMAIL_OTP_ENTER_SCREEN, {
      email: values.email,
    });
  };

  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppText style={styles.heading}>Enter your email address</AppText>
        <View style={styles.headingUnder}></View>

        <AppForm
          initialValues={{email: ''}}
          validationSchema={Schema}
          onSubmit={values => handleSubmit(values, emailUpdates)}>
          <AppFormField
            name="email"
            startIcon="alternate-email"
            placeholder="youremail@something.com"
            preCheck={true}
            keyboardType="email-address"
          />
          <AppFormSubmitButton style={styles.button} title="Send OTP" />
        </AppForm>

        <View style={styles.mailRow}>
          <AppCheckbox
            checked={emailUpdates}
            onPress={() => setEmailUpdates(emailUpdates ? 0 : 1)}
          />
          <AppText style={styles.mailText}>Receive updates on Mail</AppText>
          <Image
            style={styles.mailLogo}
            source={require('../Assets/mailLogo.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.termsRow}>
          <AppText style={styles.termsText}>
            @ The email you entered is used for verification purposes. Make sure
            to provide a valid one.
          </AppText>
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
  logo: {
    height: wp(20),
    marginTop: hp(2),
    width: wp(45),
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
  mailRow: {
    flexDirection: 'row',
    marginTop: hp(3),
    alignItems: 'center',
  },
  mailText: {
    fontSize: 13,
    marginLeft: wp(3.5),
    color: defaultStyles.colors.medium,
  },
  mailLogo: {
    width: wp(4.5),
    height: wp(4.5),
    marginLeft: wp(3),
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(4),
    width: wp(80),
    flexWrap: 'wrap',
  },
  termsText: {
    fontSize: 12,
    color: defaultStyles.colors.light,
  },
});

export default EmailEnterScreen;
