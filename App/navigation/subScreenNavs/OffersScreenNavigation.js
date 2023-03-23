import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import defaultStyles from '../../Config/defaultStyles';
import routeName from '../../Config/navigationRouteNames';

import AppScreen from '../../Components/AppScreen';
import AppText from '../../Components/AppText';

import OffersScreen from '../../Screens/OffersScreen';
import EmiBrandsScreen from '../../Screens/EmiBrandsScreen';

screenOptions = {
  tabBarItemStyle: {
    width: wp(25),
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIndicatorStyle: {
    height: hp(0.5),
    width: wp(6),
    backgroundColor: defaultStyles.colors.dark,
    marginTop: hp(1),
    borderRadius: 10,
    marginLeft: wp(10.5),
  },
  tabBarStyle: {
    shadowOpacity: 0,
    marginTop: hp(2),
    marginLeft: wp(6),
  },
};

export default function CollegeDetailsScreenNavigation() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <AppScreen>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={routeName.EMI_BRANDS_SCREEN}
          component={EmiBrandsScreen}
          options={{
            tabBarLabel: ({focused, color}) => (
              <AppText
                style={focused ? styles.activeLable : styles.inActiveLable}>
                No Cost EMI
              </AppText>
            ),
          }}
        />
        <Tab.Screen
          name={routeName.OFFERS_SCREEN}
          component={OffersScreen}
          options={{
            tabBarLabel: ({focused, color}) => (
              <AppText
                style={focused ? styles.activeLable : styles.inActiveLable}>
                Offers
              </AppText>
            ),
          }}
        />
      </Tab.Navigator>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  activeLable: {
    fontSize: 18,
    color: defaultStyles.colors.black,
    width: wp(35),
    height: hp(3),
  },
  inActiveLable: {
    fontSize: 15,
    color: defaultStyles.colors.light,
  },
});
