import React from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import NavIcon from '../Components/common/NavIcon';
import WeekOffIcon from '../Components/common/WeekOffIcon';
import SingleTapIcon from '../Components/common/SingleTapIcon';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OffersIcon from '../Components/common/OffersIcon';
import InAutoScrollBanner from '../Components/common/InAutoScrollBanner';

const banners = [
  {
    image:
      'https://paisawasooldeal.in/wp-content/uploads/2022/03/Zepto-Flat-50-Off-Coupon-Code.webp',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1655374059732/netflix-coupons.jpg',
    navigation: '',
  },
  {
    image:
      'https://www.grabon.in/indulge/wp-content/uploads/2021/03/Swiggy-Coupons-Deals.jpg',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1643102114056/blinkit-coupons.jpg',
    navigation: '',
  },
];

export default function HomeScreen() {
  return (
    <AppScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
          {/* Head start */}
          <View style={styles.headContainer}>
            <View style={styles.headLeft}>
              <AppText style={styles.headLeftText}>hi</AppText>
              <AppText
                style={[
                  styles.headLeftText,
                  {color: '#000', marginLeft: wp(1.5)},
                ]}>
                Dude!
              </AppText>
            </View>
            <View style={styles.headRight}>
              <AppText style={styles.headRightTitle}>Available Limit</AppText>
              <AppText style={styles.headRightSubtitle}>₹66,546</AppText>
            </View>
          </View>

          {/* Due Bill Amount Start */}
          <View style={styles.box}>
            <View style={styles.boxHead}>
              <View style={styles.spendsContainer}>
                <AppText style={styles.spentLeftText}>Spent till date</AppText>
                <View style={{alignItems: 'flex-end'}}>
                  <AppText style={styles.dueAmount}>₹8,980</AppText>
                  <AppText style={styles.dueDate}>Due by Jul 20</AppText>
                </View>
              </View>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.repayButton}>
                <AppText style={styles.repayButtonText}>Pay Now</AppText>
              </TouchableOpacity>
            </View>
            <View style={styles.boxFooter}>
              <MaterialCommunityIcons
                name="gift"
                style={styles.boxFooterIcon}
              />
              <AppText style={styles.boxFooterText}>
                pay early to recieve cashback of upto ₹200
              </AppText>
            </View>
          </View>

          {/* Quick links navigations start */}
          <View style={styles.box}>
            <View style={styles.boxHead}>
              <View style={styles.highlightHead}>
                <AppText style={styles.highlightLeftText}>
                  At Your Finger Tips
                </AppText>
                <TouchableOpacity style={styles.highlightRight}>
                  <AppText style={styles.highlightRightText}>view all</AppText>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    style={styles.highlightRightIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.navContainer}>
                <NavIcon
                  name="Mobile Recharge"
                  iconImage={require('../Assets/icons/mobile.png')}
                  onPress={() => console.log('clicked')}
                />
                <NavIcon
                  name="Bank Transfer"
                  headTag="5% fee"
                  iconImage={require('../Assets/icons/bank.png')}
                  onPress={() => console.log('clicked')}
                  highlight={true}
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
            </View>
          </View>

          {/* Auto Scrol Banner Start */}
          <InAutoScrollBanner data={banners} scrollInterval={2} />

          {/* Week off Start */}
          <View style={styles.box}>
            <View style={styles.boxHead}>
              <View style={styles.highlightHead}>
                <View>
                  <AppText
                    style={{
                      fontSize: 21.5,
                      color: defaultStyles.colors.black,
                      marginVertical: hp(0.3),
                    }}>
                    Week Off !
                  </AppText>
                  <AppText style={[styles.highlightLeftText]}>
                    we mean weekly offers
                  </AppText>
                </View>
                <TouchableOpacity style={styles.highlightRight}>
                  <AppText style={styles.highlightRightText}>view all</AppText>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    style={styles.highlightRightIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.navContainer, {marginTop: hp(1.7)}]}>
                <WeekOffIcon
                  name="Zomato"
                  brandImage="https://logos-download.com/wp-content/uploads/2016/06/Zomato_logo.png"
                  onPress={() => console.log('clicked')}
                />
                <WeekOffIcon
                  name="Domino's Pizza"
                  brandImage="https://www.logolynx.com/images/logolynx/d9/d96eb14af4e5f57b2bb36fa9238a13c1.jpeg"
                  headTag="Flat 100 off"
                  onPress={() => console.log('clicked')}
                />
                <WeekOffIcon
                  name="Book my show"
                  brandImage="https://play-lh.googleusercontent.com/KSXq3Idt1WbHnaHcsC4p5KxaRE0KuuB-GNRJP3XRS2omj6DY8ohkbMlIbK53Sp6TlxYm=w480-h960-rw"
                  onPress={() => console.log('clicked')}
                />
                <WeekOffIcon
                  name="Zepto"
                  brandImage="https://play-lh.googleusercontent.com/PL-CPFaVWSo6QvMIUFR1owCNKSVxUHGnMudqX5oob3FSYSd99_YrOQlXWyNXJjQrKoKj=s96-rw"
                  headTag="40% off"
                  onPress={() => console.log('clicked')}
                />
              </View>
            </View>
            <View style={styles.boxFooter}>
              <MaterialCommunityIcons
                name="food"
                style={styles.boxFooterIcon}
              />
              <AppText style={styles.boxFooterText}>
                Upto 60% off on top brands
              </AppText>
            </View>
          </View>

          {/* Single Tap Payments Start */}
          <View style={styles.scrollContainer}>
            <View style={styles.scrollHead}>
              <AppText style={styles.scrollTitle}>Single Tap Payments</AppText>
              <TouchableOpacity
                style={[styles.highlightRight, {marginRight: wp(6)}]}>
                <AppText style={styles.highlightRightText}>view all</AppText>
                <MaterialCommunityIcons
                  name="chevron-right"
                  style={styles.highlightRightIcon}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.scroll}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <SingleTapIcon
                title="Make my trip"
                image="https://play-lh.googleusercontent.com/1llAcleLs0UDr5ysUl_C4aHM-vN70HGTy7gjlM78SLsPCOijj7oosBLQc26G2daqOg=s96-rw"
              />
              <SingleTapIcon
                title="Netflix"
                image="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=s96-rw"
              />
              <SingleTapIcon
                title="1MG"
                image="https://play-lh.googleusercontent.com/yjbAu08_Ahes38IEMV8slP91zgjh2mdh5xpZefvcbYuZxR8O7FZFderRn2Ivaz0uR2Lw=w480-h960-rw"
              />
              <SingleTapIcon
                title="Goibibo"
                image="https://play-lh.googleusercontent.com/gIef9OsQlLPgRphyN6odRZlBKmrl-TUnTpuiwe-0OBJ3S_BcSsUf_qEVnlAKG_9UplE=s96-rw"
              />
              <SingleTapIcon
                title="OYO"
                image="https://tse2.mm.bing.net/th?id=OIP.8Jn6yHbLfoAKsFiy8_h-IQHaHa&pid=Api&P=0"
              />
              <SingleTapIcon
                title="aha"
                image="https://play-lh.googleusercontent.com/Gl0UDuMvugAoqiQYD9dyyius_3J3SGSzzdnwVFolxEBiMwyAbmepl2wmIeZz7bZPIzbv=s96-rw"
              />
              <SingleTapIcon
                title="Blinkit"
                image="https://play-lh.googleusercontent.com/BdptTtWnhctVNBw9TlU3Rxnw3Jfls8uEGjWCjwScKj4jRQPvw1YSGzmNha_dEGjc9Fs=w480-h960-rw"
              />
            </ScrollView>
          </View>

          {/* Single Tap Payments Start */}
          <View style={styles.scrollContainer}>
            <View style={styles.scrollHead}>
              <AppText style={styles.scrollTitle}>
                Offers You Can't Resist
              </AppText>
              <TouchableOpacity
                style={[styles.highlightRight, {marginRight: wp(6)}]}>
                <AppText style={styles.highlightRightText}>view all</AppText>
                <MaterialCommunityIcons
                  name="chevron-right"
                  style={styles.highlightRightIcon}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.scroll}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <OffersIcon
                image="https://cdn.dribbble.com/users/363502/screenshots/3669583/2rapido1.png"
                title="Rapido"
                description="Flat 10% off* on
                First 3 Rides on getting payed with Dude Limit"
              />
              <OffersIcon
                image="https://jioupdate.in/wp-content/uploads/2020/11/JioMart-Logo.jpg"
                title="Jio Mart"
                description="20% off* on
                Order Above 3000Rs on using Dude Credit"
              />
              <OffersIcon
                image="https://odishabytes.com/wp-content/uploads/2020/07/Dunzo-logo-759.jpg"
                title="Dunzo"
                description="200* Cashback on order above 2000*"
              />
              <OffersIcon
                image="https://arviancertification.com/images/snapdeal.png"
                title="snap deal"
                description="Big day Sale on
                Order Above 3000Rs on using Dude Credit"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  /////////////////////////////////////////// HEAD STYLE START
  headContainer: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headLeft: {
    flexDirection: 'row',
  },
  headLeftText: {
    fontSize: 20,
    color: defaultStyles.colors.dark,
  },
  headRightTitle: {
    fontSize: 10,
    color: defaultStyles.colors.primary,
    marginBottom: hp(0.2),
  },
  headRightSubtitle: {
    fontSize: 13.5,
    fontWeight: 'bold',
  },
  /////////////////////////////////////////// DUE AMOUNT STYLE START
  box: {
    width: wp(90),
    borderWidth: wp(0.1),
    borderColor: defaultStyles.colors.medium,
    borderRadius: 7,
    justifyContent: 'space-between',
    marginTop: hp(2),
    overflow: 'hidden',
  },
  boxHead: {
    paddingHorizontal: wp(7),
  },
  spendsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: hp(2.4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spentLeftText: {
    fontSize: 12.4,
    color: defaultStyles.colors.light,
  },
  dueAmount: {
    fontSize: 22,
    letterSpacing: 0.8,
  },
  dueDate: {
    fontSize: 9.5,
    color: defaultStyles.colors.medium,
    marginRight: wp(0.9),
  },
  divider: {
    width: '100%',
    height: hp(0.09),
    backgroundColor: defaultStyles.colors.black,
    opacity: 0.3,
    marginVertical: hp(2.4),
  },
  repayButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 5,
    paddingVertical: hp(1.3),
    marginBottom: hp(2.4),
  },
  repayButtonText: {
    fontSize: 13.5,
    color: defaultStyles.colors.white,
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
  /////////////////////////////////////////// HIGHLIGHT NAV STYLE START
  highlightHead: {
    paddingVertical: hp(1.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  highlightLeftText: {
    fontSize: 11,
    color: defaultStyles.colors.medium,
  },
  highlightRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  highlightRightText: {
    fontSize: 14.4,
    color: defaultStyles.colors.primary,
  },
  highlightRightIcon: {
    fontSize: 18,
    color: defaultStyles.colors.primary,
    marginLeft: wp(1),
  },
  navContainer: {
    marginTop: hp(1.5),
    marginBottom: hp(2.2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //////////////// Single Tap payments
  scrollContainer: {
    width: '100%',
    marginTop: hp(2),
  },
  scrollHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollTitle: {
    fontSize: 15,
    marginLeft: wp(6),
    color: defaultStyles.colors.black,
  },
  scroll: {
    marginTop: hp(2),
    marginBottom: hp(0.5),
  },
});
