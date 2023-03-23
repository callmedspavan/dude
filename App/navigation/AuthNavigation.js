import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import routeName from '../Config/navigationRouteNames';

// Screens Start
import MobileNumberEnterScreen from '../Screens/MobileNumberEnterScreen';
import MobileOtpEnterScreen from '../Screens/MobileOtpEnterScreen';
import EmailEnterScreen from '../Screens/EmailEnterScreen';
import EmailOtpEnterScreen from '../Screens/EmailOtpEnterScreen';
import PermissionsScreen from '../Screens/PermissionsScreen';
import BasicDetailsScreen from '../Screens/BasicDetailsScreen';

import CollegeDetailsScreenNavigation from './subScreenNavs/CollegeDetailsScreenNavigation';

import CibilResultScreen from '../Screens/CibilResultScreen';
import AadharNumberEnterScreen from '../Screens/AadharNumberEnterScreen';
import AadharOtpEnterScreen from '../Screens/AadharOtpEnterScreen';
import SelfieScreen from '../Screens/SelfieScreen';

export default function AuthNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={routeName.SELFIE_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routeName.MOBILE_NUMBER_ENTER_SCREEN}
        component={MobileNumberEnterScreen}
      />
      <Stack.Screen
        name={routeName.MOBLE_OTP_ENTER_SCREEN}
        component={MobileOtpEnterScreen}
      />
      <Stack.Screen
        name={routeName.EMAIL_ENTER_SCREEN}
        component={EmailEnterScreen}
      />
      <Stack.Screen
        name={routeName.EMAIL_OTP_ENTER_SCREEN}
        component={EmailOtpEnterScreen}
      />
      <Stack.Screen
        name={routeName.PERMISSIONS_SCREEN}
        component={PermissionsScreen}
      />
      <Stack.Screen
        name={routeName.BASIC_DETAILS_SCREEN}
        component={BasicDetailsScreen}
      />
      <Stack.Screen
        name={routeName.COLLEGE_DETAILS_SCREEN_NAVIGATION}
        component={CollegeDetailsScreenNavigation}
      />
      <Stack.Screen
        name={routeName.CIBIL_RESULT_SCREEN}
        component={CibilResultScreen}
      />
      <Stack.Screen
        name={routeName.AADHAR_NUMBER_ENTER_SCREEN}
        component={AadharNumberEnterScreen}
      />
      <Stack.Screen
        name={routeName.AADHAR_OTP_ENTER_SCREEN}
        component={AadharOtpEnterScreen}
      />
      <Stack.Screen name={routeName.SELFIE_SCREEN} component={SelfieScreen} />
    </Stack.Navigator>
  );
}
