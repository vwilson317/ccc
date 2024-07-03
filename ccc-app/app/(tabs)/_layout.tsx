import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import MKButton from '@/components/Button';
import Icon from '@/components/Icon';
import {Text} from '@/components/Themed';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Carioca Coastal Club',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            // <Link href="/modal" asChild>
            //   <Pressable>
            //     {({ pressed }) => (
            //       <FontAwesome
            //         name="info-circle"
            //         size={25}
            //         color={Colors[colorScheme ?? 'light'].text}
            //         style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            //       />
            //     )}
            //   </Pressable>
            // </Link>
            <View style={styles.qrButton}>
            <MKButton>
              <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8, color: 'white' }} />
              <Text style={{ color: 'white' }}>Scan QR Code</Text>
            </MKButton>
          </View>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />*/}
    </Tabs> 
  );
}

const styles = StyleSheet.create({
  qrButton:{
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
});
