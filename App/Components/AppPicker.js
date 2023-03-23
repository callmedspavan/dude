import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AppScreen from './AppScreen';
import AppText from './AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../Config/defaultStyles';

export default function AppPicker({
  style,
  items,
  keyVariable,
  valueVariable,
  placeholder,
  pickedItem,
  setPickedItem,
}) {
  const [modelEnable, setModelEnable] = useState(false);

  const handleSelect = item => {
    setModelEnable(false);
    setPickedItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelEnable(true)}>
        <View style={[styles.pickerBox, style]}>
          <AppText style={pickedItem ? styles.input : styles.placeholder}>
            {pickedItem[valueVariable]
              ? pickedItem[valueVariable]
              : pickedItem
              ? pickedItem
              : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" style={styles.icon} />
        </View>
      </TouchableWithoutFeedback>
      {/* Model Start */}
      <Modal visible={modelEnable} animationType="slide">
        <AppScreen style={styles.screen}>
          <FlatList
            style={styles.Container}
            contentContainerStyle={styles.list}
            data={items}
            keyExtractor={(item, index) =>
              item[keyVariable] ? item[keyVariable] : index
            }
            renderItem={({item}) => (
              <>
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => handleSelect(item)}>
                  <AppText style={styles.listText}>
                    {item[valueVariable] ? item[valueVariable] : item}
                  </AppText>
                </TouchableOpacity>
              </>
            )}
            showsVerticalScrollIndicator={false}
          />
          <TouchableHighlight
            onPress={() => setModelEnable(false)}
            style={styles.closeButton}>
            <MaterialCommunityIcons name="close" style={styles.closeIcon} />
          </TouchableHighlight>
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  pickerBox: {
    flexDirection: 'row',
    borderWidth: wp(0.2),
    borderColor: defaultStyles.colors.light,
    alignItems: 'center',
    height: hp(6.7),
    padding: wp(3.5),
  },
  input: {
    marginLeft: wp(3),
    color: defaultStyles.colors.medium,
    letterSpacing: 1,
    fontSize: 13,
    flex: 1,
  },
  placeholder: {
    marginLeft: wp(3),
    color: defaultStyles.colors.light,
    letterSpacing: 1,
    fontSize: 13,
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: defaultStyles.colors.light,
    marginRight: wp(4),
  },
  // Model style start -_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_-
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    width: wp(70),
    marginTop: hp(10),
    marginBottom: hp(11),
  },
  list: {
    alignItems: 'center',
  },
  listItem: {
    marginBottom: hp(7),
  },
  listText: {
    color: defaultStyles.colors.dark,
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: defaultStyles.colors.black,
    position: 'absolute',
    width: wp(13),
    height: wp(13),
    borderRadius: wp(9),
    bottom: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 19,
    color: defaultStyles.colors.white,
  },
});
