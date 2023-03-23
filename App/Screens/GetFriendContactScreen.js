import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppTouchIcon from '../Components/AppTouchIcon';
import AppTextInput from '../Components/AppTextInput';
import Contact from '../Components/common/Contact';

export default function GetFriendContactScreen({navigation}) {
  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppTouchIcon
          name="keyboard-backspace"
          onPress={() => navigation.navigate(routeName.COLLEGE_DETAILS_SCREEN)}
        />
        <AppText style={styles.heading}>Dude, who is your friend?</AppText>
        <View style={styles.headingUnder} />
        <AppTextInput
          placeholder="Search by Name / Number"
          endIcon="search"
          autoFocus={true}
        />
        <ScrollView style={{marginTop: 30}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routeName.COLLEGE_DETAILS_SCREEN, {
                frnd: {name: 'Lokesh Pavan', number: '7569661879'},
              })
            }>
            <Contact iconText="LP" name="Lokesh Pavan" number="7569661879" />
          </TouchableOpacity>
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
          <Contact iconText="RC" name="Ravi Charan" number="8643776543" />
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
          <Contact iconText="PN" name="Praveen" number="8765229817" />
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
          <Contact iconText="CA" name="Chitra" number="9543998979" />
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
          <Contact iconText="SH" name="Sampath" number="9543998979" />
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
          <Contact iconText="VA" name="Varsha" number="7658776439" />
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
          <Contact iconText="CN" name="Charan" number="7698731086" />
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
          <Contact iconText="CA" name="Chitra" number="9543998979" />
          <View
            style={{
              width: wp(80),
              padding: wp(0.1),
              opacity: 0.5,
              margin: wp(3),
              backgroundColor: defaultStyles.colors.light,
            }}
          />
        </ScrollView>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
    paddingTop: hp(2),
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
});

const contacts = [
  {
    recordID: '6b2237ee0df85980',
    backTitle: '',
    company: '',
    emailAddresses: [
      {
        label: 'work',
        email: 'carl-jung@example.com',
      },
    ],
    familyName: 'Jung',
    givenName: 'Carl',
    middleName: '',
    jobTitle: '',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(555) 555-5555',
      },
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
    postalAddresses: [
      {
        label: 'home',
        formattedAddress: '',
        street: '123 Fake Street',
        pobox: '',
        neighborhood: '',
        city: 'Sample City',
        region: 'CA',
        state: 'CA',
        postCode: '90210',
        country: 'USA',
      },
    ],
    prefix: 'MR',
    suffix: '',
    department: '',
    birthday: {year: 1988, month: 1, day: 1},
    imAddresses: [
      {username: '0123456789', service: 'ICQ'},
      {username: 'johndoe123', service: 'Facebook'},
    ],
  },
  {
    recordID: '6b2237ee0df85980',
    backTitle: '',
    company: '',
    emailAddresses: [
      {
        label: 'work',
        email: 'carl-jung@example.com',
      },
    ],
    familyName: 'Jung',
    givenName: 'Carl',
    middleName: '',
    jobTitle: '',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(555) 555-5555',
      },
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
    postalAddresses: [
      {
        label: 'home',
        formattedAddress: '',
        street: '123 Fake Street',
        pobox: '',
        neighborhood: '',
        city: 'Sample City',
        region: 'CA',
        state: 'CA',
        postCode: '90210',
        country: 'USA',
      },
    ],
    prefix: 'MR',
    suffix: '',
    department: '',
    birthday: {year: 1988, month: 1, day: 1},
    imAddresses: [
      {username: '0123456789', service: 'ICQ'},
      {username: 'johndoe123', service: 'Facebook'},
    ],
  },
];
