import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as yup from 'yup';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppFormField from '../Components/formComponents/AppFormField';
import AppFormPicker from '../Components/formComponents/AppFormPicker';
import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppForm from '../Components/formComponents/AppForm';
import AppFormSubmitButton from '../Components/formComponents/AppFormSubmitButton';
import AppFormSelector from '../Components/formComponents/AppFormSelector';

const items = [
  {id: 1, value: 'Doctor'},
  {id: 2, value: 'Carpenter'},
  {id: 3, value: 'Plumber'},
  {id: 4, value: 'Aggriculture'},
  {id: 5, value: 'bluffer'},
  {id: 6, value: 'Doctor'},
  {id: 7, value: 'Carpenter'},
  {id: 8, value: 'Plumber'},
  {id: 9, value: 'Aggriculture'},
  {id: 10, value: 'bluffer'},
];

const [student, salaried] = ['STUDENT', 'SALARIED'];

export default function BasicDetailsScreen({navigation, route}) {
  const [userType, setUserType] = useState('');
  const handleSubmit = values => {
    if (values.userType === student) {
      navigation.navigate(routeName.COLLEGE_DETAILS_SCREEN_NAVIGATION);
      navigation.reset({
        index: 0,
        routes: [{name: routeName.COLLEGE_DETAILS_SCREEN_NAVIGATION}],
      });
    } else {
      navigation.navigate(routeName.CIBIL_RESULT_SCREEN);
      navigation.reset({
        index: 0,
        routes: [{name: routeName.CIBIL_RESULT_SCREEN}],
      });
    }
  };
  const handleSchemaChange = item => {
    if (item === student) {
      setUserType(student);
    } else {
      setUserType(salaried);
    }
  };

  const Schema = yup.object().shape({
    firstName: yup
      .string()
      .required()
      .max(50)
      .matches(/^[a-zA-Z ]*$/),
    lastName: yup
      .string()
      .required()
      .min(2)
      .max(50)
      .matches(/^[a-zA-Z ]*$/),
    motherName: yup
      .string()
      .min(2)
      .required()
      .max(80)
      .matches(/^[a-zA-Z ]*$/),
    panCardNumber:
      userType === salaried
        ? yup
            .string()
            .required()
            .length(10)
            .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)
        : yup
            .string()
            .length(10)
            .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/),
    userType: yup.string().oneOf([student, salaried]).required(),
    parentsOccupation: yup.object().required(),
    stay: yup.string().required(),
  });

  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppText style={styles.heading}>Basic details about you, Dude!</AppText>
        <View style={styles.headingUnder}></View>

        <AppForm
          initialValues={{
            firstName: '',
            lastName: '',
            userType: '',
            motherName: '',
            panCardNumber: '',
            parentsOccupation: '',
            stay: '',
          }}
          validationSchema={Schema}
          onSubmit={values => handleSubmit(values)}>
          <ScrollView
            style={{marginBottom: hp(4.8)}}
            showsVerticalScrollIndicator={false}>
            <AppFormField
              style={styles.input}
              name="firstName"
              preCheck={true}
              placeholder="first Name"
            />
            <AppFormField
              style={styles.input}
              name="lastName"
              preCheck={true}
              placeholder="last Name"
            />
            <AppFormPicker
              style={styles.input}
              name="userType"
              placeholder={'Who are you?'}
              items={['SALARIED', 'STUDENT']}
              conditionalFunction={handleSchemaChange}
            />
            <AppFormField
              style={styles.input}
              name="motherName"
              preCheck={true}
              placeholder="mother Name"
            />
            <AppFormSelector
              name="stay"
              title="Where did you stay Dude?"
              selectionList={['With Parents', 'PG', 'Rented Flat', 'Hostel']}
              style={styles.input}
            />
            <AppFormField
              style={styles.input}
              name="panCardNumber"
              placeholder={
                userType === 'STUDENT' ? 'pan Number (optional)' : 'pan Number'
              }
              autoCapitalize="characters"
              maxLength={10}
            />
            <AppFormPicker
              style={styles.input}
              name="parentsOccupation"
              placeholder={'Parent Occupation'}
              items={items}
              keyVariable={'id'}
              valueVariable={'value'}
            />
          </ScrollView>
          <AppFormSubmitButton style={styles.button} title="Next" />
        </AppForm>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
  },
  heading: {
    color: defaultStyles.colors.black,
    fontWeight: '500',
    letterSpacing: 1.5,
    marginTop: hp(1),
  },
  headingUnder: {
    height: hp(0.8),
    width: wp(9),
    backgroundColor: defaultStyles.colors.primary,
    marginTop: hp(1),
    borderRadius: 4,
    marginBottom: hp(2.8),
  },
  button: {
    bottom: hp(2),
    left: wp(7),
    position: 'absolute',
  },
  input: {
    marginVertical: hp(1.6),
  },
});
