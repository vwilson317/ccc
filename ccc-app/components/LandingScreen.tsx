import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import MKButton from './Button';

import Colors from '@/constants/Colors';
import Icon from './Icon';
import Search from './Search';
import ScannerScreen from './ScannerScreen';

export default function LandingScreen() {
  return (
    <View>
      <View style={styles.getStartedContainer}>

        <Search />
        {/* <ScannerScreen /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  qrButton:{
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
});
