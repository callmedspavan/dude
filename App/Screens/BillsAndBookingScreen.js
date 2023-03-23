import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import NavIcon from '../Components/common/NavIcon';
import InAutoScrollBanner from '../Components/common/InAutoScrollBanner';
import TopBar from '../Components/common/TopBar';

const banners = [
  {
    image:
      'https://images.ctfassets.net/2sam6k0rncvg/3IkjNKHib7N9AZeCZ6sgIg/2f7d6a58b466fd1d7bc9d22bbfbaf510/fastagBanner.png',
    navigation: '',
  },
  {
    image:
      'https://i2.wp.com/www.3ghackerz.com/wp-content/uploads/2017/09/phonepe-utility-bill-pay-offer.png?fit=434%2C214&ssl=1',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1591771410359/recharge-offers.jpg',
    navigation: '',
  },
  {
    image:
      'https://1.bp.blogspot.com/-_iuAWl2TB08/XvS8beMvqLI/AAAAAAAACRc/T8C1qag7dMANY3xu8UC7-cjbka0rsoYbQCLcBGAsYHQ/s1600/GAS30_LPBanner-1440x752.png',
    navigation: '',
  },
];

export default function BillsAndBookingScreen() {
  return (
    <AppScreen>
      <View style={styles.screen}>
        <TopBar
          title="Bills & Bookings"
          onPress={() => console.log('Clicked')}
        />

        {/* Nav Box */}
        <View style={styles.box}>
          <View style={styles.boxHead}>
            <View style={styles.navWraper}>
              <View style={styles.navContainer}>
                <NavIcon
                  name="Mobile Recharge"
                  iconImage={require('../Assets/icons/mobile.png')}
                  onPress={() => console.log('clicked')}
                />
                <NavIcon
                  name="Gas Billpe"
                  iconImage={require('../Assets/icons/gas.png')}
                  onPress={() => console.log('clicked')}
                />
                <NavIcon
                  name="Electricity Billpe"
                  iconImage={require('../Assets/icons/thunder.png')}
                  onPress={() => console.log('clicked')}
                />
                <NavIcon
                  name="Bus Tickets"
                  iconImage={require('../Assets/icons/bus.png')}
                  onPress={() => console.log('clicked')}
                />
              </View>
              <View style={styles.navContainer}>
                <NavIcon
                  name="Fastag Recharge"
                  iconImage={require('../Assets/icons/toll.png')}
                  onPress={() => console.log('clicked')}
                />
                <NavIcon
                  name="Mobile Billpe"
                  headTag="Post Paid"
                  iconImage={require('../Assets/icons/postpaid.png')}
                  onPress={() => console.log('clicked')}
                  highlight={true}
                />
                <NavIcon
                  name="Brodband Billpe"
                  iconImage={require('../Assets/icons/router.png')}
                  onPress={() => console.log('clicked')}
                />
                <NavIcon
                  name="DTH"
                  iconImage={require('../Assets/icons/gps.png')}
                  onPress={() => console.log('clicked')}
                />
              </View>
            </View>
          </View>
          <View style={styles.boxFooter}>
            <MaterialCommunityIcons name="bus" style={styles.boxFooterIcon} />
            <AppText style={styles.boxFooterText}>
              Get 50Rs off on your first Bus Ticket
            </AppText>
          </View>
        </View>

        {/* Banner Start */}
        <InAutoScrollBanner
          data={banners}
          scrollInterval={4}
          style={styles.banner}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp(8),
  },
  box: {
    width: wp(90),
    borderWidth: wp(0.1),
    borderColor: defaultStyles.colors.medium,
    borderRadius: 7,
    justifyContent: 'space-between',
    marginTop: hp(2),
    overflow: 'hidden',
  },
  navWraper: {
    height: hp(21.7),
    marginVertical: hp(2.2),
    width: '100%',
    justifyContent: 'space-between',
  },
  boxHead: {
    paddingHorizontal: wp(7),
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxFooter: {
    backgroundColor: '#FFF3F4',
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(3.5),
  },
  boxFooterText: {
    fontSize: 11,
    color: defaultStyles.colors.medium,
    letterSpacing: 0.2,
    marginLeft: wp(2),
  },
  boxFooterIcon: {
    fontSize: 13,
    marginLeft: wp(2),
    color: defaultStyles.colors.medium,
  },
  ////////////////// Banner Style Start //////////////
  banner: {
    marginTop: hp(3),
  },
});
