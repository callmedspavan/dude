import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppButton from '../Components/AppButton';
import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import PermissionDescribe from '../Components/common/PermissionDescribe';

export default function PermissionsScreen({navigation, route}) {
  const handleSubmit = () => {
    navigation.navigate(routeName.BASIC_DETAILS_SCREEN);
    navigation.reset({
      index: 0,
      routes: [{name: routeName.BASIC_DETAILS_SCREEN}],
    });
  };
  return (
    <AppScreen>
      <View style={styles.screen}>
        <Image
          source={require('../Assets/locked.png')}
          style={styles.headImage}
          resizeMode="contain"
        />
        <AppText style={styles.heading}>Let us serve you more better</AppText>
        <View style={styles.headingUnder}></View>

        <View style={styles.permissionsList}>
          <PermissionDescribe
            style={styles.permission}
            title="Credit Report"
            subTitle="Allow dude to obtain your credit
            information report"
            source={require('../Assets/icons/meter.png')}
          />
          <PermissionDescribe
            title="Location"
            style={styles.permission}
            subTitle="To serve you better and prevent
            location-based fraud"
            source={require('../Assets/icons/location.png')}
          />
          <PermissionDescribe
            title="SMS"
            style={styles.permission}
            subTitle="To evaluate transactional SMSs that
            increases your approval"
            source={require('../Assets/icons/sms.png')}
          />
          <PermissionDescribe
            title="Contacts"
            style={styles.permission}
            subTitle="To auto-fill contacts and process your credit profile application"
            source={require('../Assets/icons/contacts.png')}
          />
        </View>

        <AppButton style={styles.button} title="Allow" onPress={handleSubmit} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
    alignItems: 'center',
  },
  headImage: {
    height: hp(7),
    marginTop: hp(3),
    width: wp(30),
  },
  heading: {
    color: defaultStyles.colors.black,
    fontWeight: '500',
    letterSpacing: 1.5,
    marginTop: hp(4),
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
  permissionsList: {
    width: wp(70),
    marginTop: hp(4),
  },
  permission: {
    marginBottom: hp(4),
  },
});
