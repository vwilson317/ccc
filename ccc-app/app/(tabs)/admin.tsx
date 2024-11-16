import { StyleSheet } from 'react-native';
import { useState } from 'react';
// import CheckBox from 'react-native-checkbox';
import EditScreenInfo from '@/components/LandingScreen';
import { Text, View } from '@/components/Themed';
import DatePicker from '@/components/DatePicker';
import { TextInput } from 'react-native-paper';

export default function TabTwoScreen() {
  const [openHour, setOpenHour] = useState<string>('07');
  const [openMinute, setOpenMinute] = useState<string>('00');
  const [closeHour, setCloseHour] = useState<string>('17');
  const [closeMinute, setCloseMinute] = useState<string>('00');

  const validateHour = (text: string) => {
    const hour = parseInt(text);
    if (hour >= 0 && hour <= 23) {
      return text.padStart(2, '0');
    }
    return '';
  };

  const validateMinute = (text: string) => {
    const minute = parseInt(text);
    if (minute >= 0 && minute <= 59) {
      return text.padStart(2, '0');
    }
    return '';
  };

  return (
    <View style={styles.container}>
    <View style={styles.timeContainer}>
      <Text>Open: </Text>
      <TextInput
        mode="outlined"
        placeholder="HH"
        value={openHour}
        onChangeText={(text) => setOpenHour(validateHour(text))}
        keyboardType="numeric"
        maxLength={2}
        style={styles.timeInput}
      />
      <Text>:</Text>
      <TextInput
        mode="outlined"
        placeholder="MM"
        value={openMinute}
        onChangeText={(text) => setOpenMinute(validateMinute(text))}
        keyboardType="numeric"
        maxLength={2}
        style={styles.timeInput}
      />
    </View>

    <View style={styles.timeContainer}>
        <Text>Close: </Text>
        <TextInput
          mode="outlined"
          placeholder="HH"
          value={closeHour}
          onChangeText={(text) => setCloseHour(validateHour(text))}
          keyboardType="numeric"
          maxLength={2}
          style={styles.timeInput}
        />
        <Text>:</Text>
        <TextInput
          mode="outlined"
          placeholder="MM"
          value={closeMinute}
          onChangeText={(text) => setCloseMinute(validateMinute(text))}
          keyboardType="numeric"
          maxLength={2}
          style={styles.timeInput}
        />
      </View>
      <DatePicker />
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
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  timeInput: {
    width: 60,
    marginHorizontal: 5,
  },
});
