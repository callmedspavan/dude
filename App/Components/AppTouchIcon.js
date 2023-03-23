import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../Config/defaultStyles';

export default function AppTouchIcon({onPress, name, style}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name={name} style={[styles.icon, style]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    color: defaultStyles.colors.dark,
  },
});
