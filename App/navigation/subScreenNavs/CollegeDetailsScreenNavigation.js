import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import routeName from '../../Config/navigationRouteNames';

import CollegeDetailsScreen from '../../Screens/CollegeDetailsScreen';
import GetFriendContactScreen from '../../Screens/GetFriendContactScreen';

export default function CollegeDetailsScreenNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={routeName.COLLEGE_DETAILS_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routeName.COLLEGE_DETAILS_SCREEN}
        component={CollegeDetailsScreen}
      />
      <Stack.Screen
        name={routeName.GET_FRIEND_CONTACT_SCREEN}
        component={GetFriendContactScreen}
      />
    </Stack.Navigator>
  );
}
