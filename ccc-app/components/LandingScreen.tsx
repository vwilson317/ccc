import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import MKButton from './Button';

import Colors from '@/constants/Colors';
import Icon from './Icon';
import Search from './Search';

export default function LandingScreen() {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View style={styles.qrButton}>
          <MKButton>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8, color: 'white' }} />
            <Text style={{ color: 'white' }}>Scan QR Code</Text>
          </MKButton>
        </View>

        <Search />
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
