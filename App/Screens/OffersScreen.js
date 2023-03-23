import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';

const banners = [
  {
    image: 'https://cdn.grabon.in/gograbon/images/merchant/1611817594553.jpg',
    navigation: '',
  },
  {
    image: 'https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1620638991270/myntra-offers.jpg',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1656334208757/zepto%20coupons.jpg',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618492876460/dunzo-coupons.jpg',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618560127034/McDonalds-coupons.jpg',
    navigation: '',
  },
  {
    image:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1643102114056/blinkit-coupons.jpg',
    navigation: '',
  },
];

export default function OffersScreen() {
  return (
    <AppScreen>
      <View style={styles.screen}>
        <View style={{width: '100%'}}>
          <AppText style={styles.heading}>
            Shop from your favourite brands
          </AppText>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={banners}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableWithoutFeedback>
                <Image
                  source={{uri: item.image}}
                  resizeMode="stretch"
                  style={styles.banner}
                />
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  heading: {
    color: defaultStyles.colors.dark,
    fontSize: 18,
    letterSpacing: 0.5,
    marginTop: hp(3.5),
    marginLeft: wp(2),
    marginBottom: hp(3),
  },
  banner: {
    width: wp(88),
    height: hp(21.5),
    borderRadius: 22,
    marginBottom: hp(2.5),
  },
});
