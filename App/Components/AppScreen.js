import React from 'react';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';

export default function AppScreen({children, style}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
    flex: 1,
  },
});
