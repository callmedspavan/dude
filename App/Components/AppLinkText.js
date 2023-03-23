import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import defaultStyles from '../Config/defaultStyles'
import AppText from './AppText'

export default function AppLinkText({url, title, style}) {
    return (
        <Hyperlink linkDefault={true} linkText={uri => uri === url ? title : uri }>
            <AppText style={[styles.linkText, style]}>{url}</AppText>
        </Hyperlink>
    )
}

const styles = StyleSheet.create({
    linkText:{
        color: defaultStyles.colors.primary,
    }
})
