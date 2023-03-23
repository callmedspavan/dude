import React, {createRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';
import externalLinks from '../Config/externalLinks';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppLinkText from '../Components/AppLinkText';
import AppButton from '../Components/AppButton';
import TopBar from '../Components/common/TopBar';

export default function EmiConfirmScreen() {
  return (
    <AppScreen>
      <View style={styles.screen}>
        <TopBar
          title="Purchase Gift Card"
          onPress={() => console.log('pressed')}
        />

        <View style={styles.innerContainer}>
          <Image
            source={{
              uri: 'https://play-lh.googleusercontent.com/AQtSF5Sl18yp3mQ2tcbOrBLekb7cyP3kyg5BB1uUuc55zfcnbkCDLHFTBwZfYiu1aDI',
            }}
            style={styles.giftBrandImage}
          />
          <View style={styles.discContainer}>
            <AppText style={styles.termsText}>Gift Card Value</AppText>
            <AppText style={styles.cardValue}>₹{3000}</AppText>
            <AppLinkText
              style={styles.termsLink}
              title="Non-Refundable Order"
              url={externalLinks.termsAndConditions}
            />
          </View>
        </View>

        <View style={styles.planDetails}>
          <View style={styles.planContainer}>
            <View style={styles.planLeft}>
              <MaterialCommunityIcons
                name="cards-outline"
                style={styles.planLeftIcon}
              />
              <AppText style={styles.planLeftText}>Total Payable</AppText>
            </View>
            <AppText style={styles.planRightText}>₹{3000}</AppText>
          </View>
          <View style={styles.planContainer}>
            <View style={styles.planLeft}>
              <MaterialCommunityIcons
                name="brightness-percent"
                style={styles.planLeftIcon}
              />
              <AppText style={styles.planLeftText}>interest</AppText>
            </View>
            <AppText style={styles.planRightText}>₹{0}</AppText>
          </View>
          <View style={styles.planContainer}>
            <View style={styles.planLeft}>
              <MaterialCommunityIcons
                name="calendar"
                style={styles.planLeftIcon}
              />
              <AppText style={styles.planLeftText}>First payment On</AppText>
            </View>
            <AppText style={styles.planRightText}>{'5 Oct 2022'}</AppText>
          </View>
          <View style={styles.planContainer}>
            <View style={styles.planLeft}>
              <MaterialCommunityIcons
                name="calendar-month"
                style={styles.planLeftIcon}
              />
              <AppText style={styles.planLeftText}>Payment Plan</AppText>
            </View>
            <AppText style={styles.planRightText}>
              ₹{300}/mo x {2}
            </AppText>
          </View>
        </View>

        <View style={styles.fundProviderContainer}>
          <AppText style={styles.fundProviderText}>
            your credit is funded by Quadrillion Finance Pvt. Ltd. Please find
            the sanction letter in your registered mail ID.
          </AppText>
        </View>

        <View style={styles.termsRow}>
          <AppText style={styles.termsText}>
            By confirming, you are agreeing to our
          </AppText>
          <AppLinkText
            style={styles.termsLink}
            title=" Terms & Conditions"
            url={externalLinks.termsAndConditions}
          />
        </View>

        <AppButton
          title="Confirm"
          style={styles.button}
          onPress={() => console.log('clicked')}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
    paddingTop: hp(10.5),
  },
  button: {
    bottom: hp(2),
    left: wp(7),
    position: 'absolute',
  },
  // Terms and conditions Style
  termsRow: {
    bottom: hp(10),
    left: wp(7),
    position: 'absolute',
    flexDirection: 'row',
    width: wp(85),
  },
  termsText: {
    fontSize: 12,
    color: defaultStyles.colors.medium,
  },
  termsLink: {
    fontSize: 12,
  },

  ///// Fund provider Style
  fundProviderContainer: {
    bottom: hp(13.5),
    left: wp(7),
    position: 'absolute',
    width: wp(86),
    height: hp(6),
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: '#FBFBFB',
    borderColor: defaultStyles.colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(2.5),
  },
  fundProviderText: {
    fontSize: 10.5,
    textAlign: 'center',
    lineHeight: wp(3.5),
    color: defaultStyles.colors.medium,
  },
  // Top Card Details Style
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  giftBrandImage: {
    height: wp(16.5),
    width: wp(16.5),
    borderRadius: 17,
  },
  discContainer: {
    marginLeft: wp(5),
    height: wp(16.5),
    justifyContent: 'space-between',
    padding: wp(0.4),
  },
  cardValue: {
    fontSize: 25,
  },
  //////////////// Plan details Style
  planDetails: {
    marginTop: hp(4),
  },
  planContainer: {
    width: '100%',
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.6),
  },
  planLeft: {
    width: '55%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  planLeftIcon: {
    fontSize: 25,
    color: defaultStyles.colors.dark,
  },
  planLeftText: {
    fontSize: 14,
    marginLeft: wp(3.5),
    color: defaultStyles.colors.medium,
  },
  planRightText: {
    fontSize: 14,
    color: defaultStyles.colors.dark,
  },
});
