import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import EmiBrandIcon from '../Components/common/EmiBrandIcon';

const brands = [
  {
    image: 'https://hamariweb.com/mobiles/showimage.aspx?aid=673',
    name: 'Myntra',
  },
  {
    image:
      'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg',
    name: 'Amazon pay',
  },
  {
    image: 'https://smestreet.in/wp-content/uploads/2020/09/flipkart-logo.jpg',
    name: 'Flipkart',
  },
  {
    image:
      'https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png',
    name: 'Nyka',
  },
  {
    image: 'https://nextpax.com/wp-content/uploads/2022/01/makemytrip-1.png',
    name: 'Make my Trip',
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/S/abs-image-upload-na/8/AmazonStores/A21TJRUUN4KGV/19dae191bb75eda8e3fc9ffc1e335b9f.w400.h400.jpg',
    name: 'Croma',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/AQtSF5Sl18yp3mQ2tcbOrBLekb7cyP3kyg5BB1uUuc55zfcnbkCDLHFTBwZfYiu1aDI',
    name: 'Uber',
    head: 'Upto 3 months',
  },
  {
    image: 'https://image3.mouthshut.com/images/imagesp/925949557s.jpg',
    name: 'max Fashion',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Barbeque_Nation_New_Logo.jpg',
    name: 'Barbeque Nation',
  },
  {
    image:
      'https://turbologo.com/articles/wp-content/uploads/2020/01/levis-primary-logo.png.webp',
    name: "Levi's",
  },
  {
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/f535bd145259959.Y3JvcCw4NDcsNjYzLDEwMzAsMjYy.png',
    name: 'Fastrack',
  },
  {
    image:
      'https://www.logotaglines.com/wp-content/uploads/2021/06/Cafe-Coffee-Day-Logo-slogan-tagline-founder.png',
    name: 'Cafe Coffee Day',
  },
  {
    image:
      'https://brandlogos.net/wp-content/uploads/2022/08/yatra-logo_brandlogos.net_sytry-512x512.png',
    name: 'Yatra',
    head: 'Upto 5 months',
  },
];

export default function EmiBrandsScreen() {
  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppText style={styles.heading}>Most Popular Brands</AppText>
        <View style={{flex: 1}}>
          <FlatList
            numColumns={4}
            data={brands}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <EmiBrandIcon
                title={item.name}
                image={item.image}
                headTag={item.head ? item.head : null}
              />
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
    alignItems: 'flex-start',
    paddingHorizontal: wp(5),
  },
  heading: {
    color: defaultStyles.colors.dark,
    fontSize: 18,
    letterSpacing: 0.5,
    marginTop: hp(3.5),
    marginLeft: wp(2),
    marginBottom: hp(4),
  },
});
