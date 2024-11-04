import { StyleSheet, TextInput } from 'react-native';
import CheckBox from 'react-native-checkbox';
import EditScreenInfo from '@/components/LandingScreen';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <CheckBox />
      <TextInput placeholder="Open time" />
      <TextInput placeholder="Close time" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
