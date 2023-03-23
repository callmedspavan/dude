import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import defaultStyles from '../Config/defaultStyles';
import AppText from './AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function AppKeyboard({
  style,
  inputValue,
  setInputValue,
  maxLength = 100,
  handleSubmit,
}) {
  const handleInput = value => {
    if (value === '<') {
      setInputValue(inputValue.slice(0, inputValue.length - 1));
    } else {
      if (inputValue.length < maxLength) {
        setInputValue(inputValue + value);
      }
    }
  };

  return (
    <View style={[styles.keyboard, style]}>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => handleInput(1)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>1</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleInput(2)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>2</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleInput(3)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>3</AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => handleInput(4)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>4</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleInput(5)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>5</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleInput(6)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>6</AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => handleInput(7)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>7</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleInput(8)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>8</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleInput(9)}>
          <View style={styles.button}>
            <AppText style={styles.buttonText}>9</AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => handleInput('<')}>
          <View style={styles.backButton}>
            <Ionicons name="md-return-up-back" style={styles.buttonIcon} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleInput(0)}>
          <View style={[styles.button, handleSubmit ? null : {width: wp(45)}]}>
            <AppText style={styles.buttonText}>0</AppText>
          </View>
        </TouchableWithoutFeedback>
        {handleSubmit && (
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <View
              style={[
                styles.backButton,
                {backgroundColor: defaultStyles.colors.primary},
              ]}>
              <MaterialIcons name="check" style={styles.buttonIcon} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: hp(1.2),
  },
  button: {
    width: wp(18.5),
    height: wp(18.5),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.white,
    ...Platform.select({
      ios: {
        shadowColor: defaultStyles.colors.dark,
        shadowRadius: 4,
        shadowOpacity: 0.08,
        shadowOffset: {width: 0, height: 5},
      },
      android: {
        elevation: 20,
      },
    }),
  },
  backButton: {
    width: wp(18.5),
    height: wp(18.5),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.dark,
  },
  buttonText: {
    fontSize: 25,
    color: defaultStyles.colors.dark,
  },
  buttonIcon: {
    fontSize: 30,
    color: defaultStyles.colors.white,
  },
});
