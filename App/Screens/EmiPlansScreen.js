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
import AppModel from '../Components/AppModel';
import AppLinkText from '../Components/AppLinkText';
import AppButton from '../Components/AppButton';
import TopBar from '../Components/common/TopBar';

const plans = [
  {tenure: 1, planAmount: 1000, interest: 0},
  {tenure: 2, planAmount: 500, interest: 0},
  {tenure: 3, planAmount: 334, interest: 0},
  {tenure: 4, planAmount: 250, interest: 0},
  {tenure: 5, planAmount: 230, interest: 150},
  {tenure: 6, planAmount: 220, interest: 220},
  {tenure: 7, planAmount: 230, interest: 150},
  {tenure: 8, planAmount: 230, interest: 150},
  {tenure: 9, planAmount: 230, interest: 150},
  {tenure: 10, planAmount: 230, interest: 150},
];

export default function EmiPlansScreen() {
  const input = createRef();
  const [modelEnable, setModelEnable] = useState(false);
  const [tenure, setTenure] = useState();
  const [planAmount, setPlanAmount] = useState();
  const [noInterest, setNoInterest] = useState(false);
  const handleSelect = item => {
    setTenure(item.tenure);
    setPlanAmount(item.planAmount);
    setNoInterest(!item.interest);
    setModelEnable(false);
  };
  return (
    <AppScreen>
      <View style={styles.screen}>
        <TopBar
          title="Create your Gift Card"
          onPress={() => console.log('pressed')}
        />

        <ImageBackground
          source={require('../Assets/giftBackground.png')}
          style={styles.Card}>
          <Image
            source={require('../Assets/ribbon.png')}
            resizeMode="contain"
            style={styles.giftRibbon}
          />
          <AppText style={styles.giftTitle}>Gift Card</AppText>
          <View style={styles.innerContainer}>
            <Image
              source={{
                uri: 'https://play-lh.googleusercontent.com/AQtSF5Sl18yp3mQ2tcbOrBLekb7cyP3kyg5BB1uUuc55zfcnbkCDLHFTBwZfYiu1aDI',
              }}
              style={styles.giftBrandImage}
            />
            <TouchableWithoutFeedback onPress={() => input.current.focus()}>
              <View style={styles.gifInputBox}>
                <AppText style={styles.inputBadge}>Min - ₹100</AppText>
                <View style={styles.inputRow}>
                  <AppText style={{fontSize: 25}}>₹</AppText>
                  <TextInput
                    ref={input}
                    style={styles.gifInput}
                    autoFocus={true}
                    keyboardAppearance="light"
                    keyboardType="number-pad"
                    selectionColor={defaultStyles.colors.primary}
                    maxLength={5}
                    returnKeyType="done"
                    placeholder="O O O"
                    placeholderTextColor={defaultStyles.colors.light}
                    defaultValue="1000"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.giftBottomLine} />
        </ImageBackground>

        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setModelEnable(true)}>
          <AppText style={styles.startText}>
            {tenure
              ? tenure + (tenure === 1 ? ' month' : ' months')
              : 'Select repayment plan'}
          </AppText>
          {planAmount && (
            <AppText style={styles.midText}>₹{planAmount}/month</AppText>
          )}
          <View style={styles.iconContainer}>
            {noInterest && (
              <Image
                source={require('../Assets/emiImg.png')}
                style={{width: wp(10), height: wp(10)}}
                resizeMode="contain"
              />
            )}
            <MaterialCommunityIcons
              name="chevron-down"
              style={styles.endIcon}
            />
          </View>
        </TouchableOpacity>

        {/* Model Start */}
        <AppModel modelEnable={modelEnable} setModelEnable={setModelEnable}>
          <FlatList
            data={plans}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.planRow}
                onPress={() => handleSelect(item)}>
                <AppText style={styles.startText}>
                  {item.tenure + (item.tenure === 1 ? ' month' : ' months')}
                </AppText>
                <AppText style={[styles.midText, {marginLeft: wp(8)}]}>
                  ₹{item.planAmount}/month
                </AppText>
                {!item.interest && (
                  <Image
                    source={require('../Assets/emiImg.png')}
                    style={{width: wp(11), height: wp(11), marginLeft: wp(8)}}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            )}
          />
        </AppModel>

        <View style={styles.termsRow}>
          <AppText style={styles.termsText}>
            *This is Non Refundable Order
          </AppText>
          <AppLinkText
            style={styles.termsLink}
            title="Terms & Conditions "
            url={externalLinks.termsAndConditions}
          />
        </View>

        <AppButton
          title="Next"
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
    paddingTop: hp(11.5),
  },
  button: {
    bottom: hp(2),
    left: wp(7),
    position: 'absolute',
  },
  Card: {
    width: '100%',
    height: hp(23.5),
    borderWidth: 0.5,
    borderColor: defaultStyles.colors.dark,
    borderRadius: 16,
    overflow: 'hidden',
  },
  giftRibbon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  giftBottomLine: {
    width: '100%',
    height: hp(0.8),
    position: 'absolute',
    bottom: hp(1),
    backgroundColor: 'rgba(254, 78, 88, 0.2)',
  },
  giftTitle: {
    fontSize: 16,
    marginHorizontal: wp(5),
    marginTop: hp(1.2),
  },
  innerContainer: {
    width: '100%',
    marginTop: hp(5.5),
    flexDirection: 'row',
  },
  giftBrandImage: {
    height: wp(18),
    width: wp(18),
    borderRadius: 17,
    marginLeft: wp(7),
  },
  gifInputBox: {
    width: wp(42),
    height: wp(18),
    borderWidth: 0.4,
    borderRadius: 11,
    overflow: 'hidden',
    marginLeft: wp(5),
    backgroundColor: defaultStyles.colors.white,
    position: 'absolute',
    right: wp(13.5),
  },
  inputBadge: {
    backgroundColor: '#FFE600',
    width: '47%',
    fontSize: 10.5,
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.5),
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: hp(0.4),
    paddingLeft: wp(3),
  },
  gifInput: {
    fontSize: 33,
    marginLeft: wp(2.5),
    flex: 1,
  },
  /////////////////////// Drop Down Style
  inputBox: {
    flexDirection: 'row',
    borderWidth: wp(0.2),
    borderColor: defaultStyles.colors.light,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(7),
    padding: wp(3.5),
    marginTop: hp(3.5),
  },
  startText: {
    fontSize: 14,
    color: defaultStyles.colors.medium,
  },
  midText: {
    fontSize: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(15),
    height: '100%',
  },
  endIcon: {
    fontSize: 29,
    color: defaultStyles.colors.medium,
    marginHorizontal: wp(2),
  },

  // Terms and conditions Style
  termsRow: {
    marginTop: hp(4),
    width: wp(85),
    flexWrap: 'wrap',
  },
  termsText: {
    fontSize: 12.5,
    color: defaultStyles.colors.medium,
    marginBottom: hp(0.5),
  },
  termsLink: {
    fontSize: 12.5,
  },
  //////////////////// Model Start
  planRow: {
    width: wp(80),
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(5),
  },
});
