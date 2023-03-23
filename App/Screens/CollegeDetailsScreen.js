import React, {useState, useEffect, createRef} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import routeName from '../Config/navigationRouteNames';
import defaultStyles from '../Config/defaultStyles';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppFormSelector from '../Components/formComponents/AppFormSelector';
import AppForm from '../Components/formComponents/AppForm';
import AppModel from '../Components/AppModel';
import AppButton from '../Components/AppButton';

export default function CollegeDetailsScreen({navigation, route}) {
  const d1 = createRef();
  const d2 = createRef();
  const d3 = createRef();
  const d4 = createRef();
  const d5 = createRef();
  const d6 = createRef();
  const [d1Value, setd1Value] = useState('');
  const [d2Value, setd2Value] = useState('');
  const [d3Value, setd3Value] = useState('');
  const [d4Value, setd4Value] = useState('');
  const [d5Value, setd5Value] = useState('');
  const [d6Value, setd6Value] = useState('');
  const [pickedCollege, setPickedCollege] = useState('');
  const [pickedFriend, setPickedFriend] = useState('');
  const [modelEnable, setModelEnable] = useState(false);
  useEffect(() => {
    route.params ? setPickedFriend(route.params.frnd) : null;
  });
  const handleSubmit = () => {
    navigation.navigate(routeName.CIBIL_RESULT_SCREEN);
    navigation.reset({
      index: 0,
      routes: [{name: routeName.CIBIL_RESULT_SCREEN}],
    });
  };
  const handleTextChange = (key, num) => {
    switch (num) {
      case 1:
        if (key === 'Backspace') {
          if (d1Value === '') {
          } else {
            setd1Value('');
          }
        } else {
          setd1Value(key);
          d2.current.focus();
        }
        break;
      case 2:
        if (key === 'Backspace') {
          if (d2Value === '') {
            setd1Value('');
            d1.current.focus();
          } else {
            setd2Value('');
          }
        } else {
          setd2Value(key);
          d3.current.focus();
        }
        break;
      case 3:
        if (key === 'Backspace') {
          if (d3Value === '') {
            setd2Value('');
            d2.current.focus();
          } else {
            setd3Value('');
          }
        } else {
          setd3Value(key);
          d4.current.focus();
        }
        break;
      case 4:
        if (key === 'Backspace') {
          if (d4Value === '') {
            setd3Value('');
            d3.current.focus();
          } else {
            setd4Value('');
          }
        } else {
          setd4Value(key);
          d5.current.focus();
        }
        break;
      case 5:
        if (key === 'Backspace') {
          if (d5Value === '') {
            setd4Value('');
            d4.current.focus();
          } else {
            setd5Value('');
          }
        } else {
          setd5Value(key);
          d6.current.focus();
        }
        break;
      case 6:
        if (key === 'Backspace') {
          if (d6Value === '') {
            setd5Value('');
            d5.current.focus();
          } else {
            setd6Value('');
          }
        } else {
          setd6Value(key);
        }
        break;
    }
  };
  const handleSearch = search => {
    // Call Backend
  };
  const handleSelect = item => {
    setModelEnable(false);
    setPickedCollege(item.longName);
    d1.current.focus();
  };
  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppText style={styles.heading}>How About Your College Dude!</AppText>
        <View style={styles.headingUnder} />

        <TouchableWithoutFeedback
          onPress={() => setModelEnable(true)}
          style={styles.inputBox}>
          <View style={styles.pickerBox}>
            <AppText style={pickedCollege ? styles.input : styles.placeholder}>
              {pickedCollege ? pickedCollege : 'Select your College'}
            </AppText>
            <MaterialCommunityIcons name="chevron-down" style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>

        <AppModel modelEnable={modelEnable} setModelEnable={setModelEnable}>
          <AppTextInput
            onChangeText={search => handleSearch(search)}
            endIcon="search"
            placeholder="Where do you study, Dude?"
            autoFocus={true}
          />
          <View style={styles.listContainer}>
            <FlatList
              style={styles.list}
              data={colleges}
              keyExtractor={college => college.id}
              ListFooterComponent={() => (
                <View style={styles.footer}>
                  <AppText style={styles.footerText}>
                    Could not found your college?
                  </AppText>
                  <TouchableOpacity style={styles.footerButton}>
                    <AppText style={styles.footerButtontext}>Add Now</AppText>
                  </TouchableOpacity>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => handleSelect(item)}>
                    <View style={styles.listItem}>
                      <AppText style={styles.title}>
                        {item.longName}
                        {', '}
                        {item.type}
                      </AppText>
                      <AppText style={styles.subTitle}>
                        {item.city}
                        {', '}
                        {item.state}
                      </AppText>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </AppModel>

        <View style={styles.inputBox}>
          <AppText style={styles.dateTitle}>When will you graduate?</AppText>
          <View style={styles.dateContainer}>
            <TextInput
              style={styles.dateInputBox}
              ref={d1}
              maxLength={1}
              onKeyPress={({nativeEvent: {key}}) => handleTextChange(key, 1)}
              value={d1Value}
              selectionColor={defaultStyles.colors.primary}
              placeholder="M"
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.dateInputBox}
              ref={d2}
              maxLength={1}
              onKeyPress={({nativeEvent: {key}}) => handleTextChange(key, 2)}
              value={d2Value}
              selectionColor={defaultStyles.colors.primary}
              placeholder="M"
              keyboardType="number-pad"
            />
            <TextInput
              style={[styles.dateInputBox, {marginLeft: wp(6)}]}
              ref={d3}
              maxLength={1}
              onKeyPress={({nativeEvent: {key}}) => handleTextChange(key, 3)}
              value={d3Value}
              selectionColor={defaultStyles.colors.primary}
              placeholder="Y"
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.dateInputBox}
              ref={d4}
              maxLength={1}
              onKeyPress={({nativeEvent: {key}}) => handleTextChange(key, 4)}
              value={d4Value}
              selectionColor={defaultStyles.colors.primary}
              placeholder="Y"
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.dateInputBox}
              ref={d5}
              maxLength={1}
              onKeyPress={({nativeEvent: {key}}) => handleTextChange(key, 5)}
              value={d5Value}
              selectionColor={defaultStyles.colors.primary}
              placeholder="Y"
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.dateInputBox}
              ref={d6}
              maxLength={1}
              selectionColor={defaultStyles.colors.primary}
              placeholder="Y"
              keyboardType="number-pad"
              onKeyPress={({nativeEvent: {key}}) => handleTextChange(key, 6)}
              value={d6Value}
            />
          </View>
        </View>

        <View>
          <AppForm initialValues={{docType: ''}}>
            <AppFormSelector
              name="docType"
              title="Verify your identity"
              selectionList={['College ID', 'Fee Reciept']}
            />
          </AppForm>
          <View style={styles.imageContainer}>
            <TouchableOpacity>
              <View style={styles.imageBox}>
                <Ionicons
                  name="ios-camera-outline"
                  style={styles.imageSelectIcon}
                />
                <AppText style={styles.imageSelectText}>front</AppText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.imageBox, {marginLeft: wp(6)}]}>
                <Ionicons
                  name="ios-camera-outline"
                  style={styles.imageSelectIcon}
                />
                <AppText style={styles.imageSelectText}>back</AppText>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {!pickedFriend && (
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() =>
              navigation.navigate(routeName.GET_FRIEND_CONTACT_SCREEN)
            }
            style={styles.inputBox}>
            <View style={styles.pickerBox}>
              <AppText style={pickedFriend ? styles.input : styles.placeholder}>
                {pickedFriend
                  ? 'Change your Friend'
                  : 'let us know your friend'}
              </AppText>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        )}

        {pickedFriend ? (
          <View style={[styles.selectedContactContainer, styles.inputBox]}>
            <View style={styles.selectedContactDesc}>
              <AppText style={styles.selectedContactTitle}>
                {pickedFriend.name}
              </AppText>
              <AppText style={styles.selectedContactSubtitle}>
                {pickedFriend.number}
              </AppText>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() =>
                navigation.navigate(routeName.GET_FRIEND_CONTACT_SCREEN)
              }>
              <AppText style={styles.editButtonText}>EDIT</AppText>
            </TouchableOpacity>
          </View>
        ) : null}

        <AppButton
          title="Submit"
          onPress={handleSubmit}
          style={styles.button}
        />
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
  button: {
    bottom: hp(2),
    left: wp(7),
    position: 'absolute',
  },
  inputBox: {
    marginVertical: hp(4),
  },
  pickerBox: {
    flexDirection: 'row',
    borderWidth: wp(0.2),
    borderColor: defaultStyles.colors.light,
    alignItems: 'center',
    height: hp(6.7),
    padding: wp(3.5),
  },
  input: {
    marginLeft: wp(1),
    color: defaultStyles.colors.medium,
    letterSpacing: 1,
    fontSize: 13,
    flex: 1,
  },
  placeholder: {
    marginLeft: wp(1),
    color: defaultStyles.colors.light,
    letterSpacing: 1,
    fontSize: 13,
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: defaultStyles.colors.light,
    marginHorizontal: wp(1),
  },
  identityArea: {
    marginVertical: hp(4),
  },
  listContainer: {
    height: hp(36),
    width: '100%',
    marginTop: hp(1),
    backgroundColor: defaultStyles.colors.white,
  },
  listItem: {
    width: '100%',
    padding: wp(1.2),
    height: hp(8),
    justifyContent: 'center',
  },
  title: {
    fontSize: 13.7,
    color: defaultStyles.colors.dark,
  },
  subTitle: {
    fontSize: 13,
    color: defaultStyles.colors.medium,
  },
  itemSeparator: {
    width: '93%',
    margin: wp(2),
    backgroundColor: defaultStyles.colors.light,
    height: hp(0.09),
  },
  footer: {
    borderTopWidth: hp(0.2),
    borderTopColor: defaultStyles.colors.primary,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(10),
    width: '93%',
    margin: wp(2),
  },
  footerText: {
    fontSize: 14,
    color: defaultStyles.colors.medium,
  },
  footerButton: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 6,
    paddingHorizontal: wp(3),
    paddingVertical: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtontext: {
    color: defaultStyles.colors.white,
    fontSize: 14,
  },
  imageContainer: {
    marginTop: hp(2),
    width: '100%',
    height: hp(12.5),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  imageBox: {
    width: wp(25),
    height: wp(25),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: defaultStyles.colors.light,
    borderRadius: 13,
  },
  imageSelectIcon: {
    fontSize: 23,
    color: defaultStyles.colors.light,
  },
  imageSelectText: {
    fontSize: 14,
    color: defaultStyles.colors.medium,
  },
  dateTitle: {
    fontSize: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: hp(2),
  },
  dateInputBox: {
    borderWidth: 0.3,
    width: wp(7),
    height: wp(7),
    textAlign: 'center',
    borderRadius: 5,
    marginRight: wp(3),
    borderColor: defaultStyles.colors.light,
  },
  selectedContactContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: wp(4),
    backgroundColor: '#FFF1F2',
    borderRadius: 10,
    borderWidth: wp(0.22),
    borderColor: defaultStyles.colors.primary,
    borderStyle: 'dashed',
  },
  selectedContactTitle: {
    fontSize: 16,
    color: defaultStyles.colors.dark,
    marginBottom: hp(0.5),
  },
  selectedContactSubtitle: {
    fontSize: 14,
    color: defaultStyles.colors.medium,
  },
  editButton: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 4,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(4),
  },
  editButtonText: {
    fontSize: 14,
    color: defaultStyles.colors.white,
  },
});

const colleges = [
  {
    id: '633',
    name: 'Amrita Vishwa Vidyapeetham, Coimbatore ',
    longName: 'Amrita School of Business, Coimbatore ',
    type: 'Constituent / University College',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
  },
  {
    id: '641',
    name: 'Amrita Vishwa Vidyapeetham, Coimbatore ',
    longName: 'Department of Communication, Coimbatore ',
    type: 'Constituent / University College',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
  },
  {
    id: '988',
    name: 'Anna University, Chennai ',
    longName: 'Adithya Institute of Technology ',
    type: 'Affiliated College',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
  },
  {
    id: '638',
    name: 'Amrita Vishwa Vidyapeetham, Coimbatore ',
    longName: 'Amrita School of Engineering, Coimbatore ',
    type: 'Constituent / University College',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
  },
  {
    id: '645',
    name: 'Amrita Vishwa Vidyapeetham, Coimbatore ',
    longName: 'Department of Social Work, Coimbatore ',
    type: 'Constituent / University College',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
  },
  {
    id: '992',
    name: 'Anna University, Chennai ',
    longName: 'AJK Institute of Management ',
    type: 'Affiliated College',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
  },
  {
    id: '993',
    name: 'Anna University, Chennai ',
    longName: 'Akshaya College of Engineering and Technology ',
    type: 'Affiliated College',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
  },
];
