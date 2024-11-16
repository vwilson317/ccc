import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { useState, useCallback } from "react";

export default function DatePicker() {
    const [dates, setDates] = useState();
    const [open, setOpen] = useState(false);
  
    const onDismiss = useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirm = useCallback((params: any) => {
      setOpen(false);
      setDates(params.dates);
      console.log('[on-change-multi]', params);
    }, []);

    return (
        <SafeAreaProvider>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
            Pick multiple dates
          </Button>
          <DatePickerModal
            locale="en"
            mode="multiple"
            visible={open}
            onDismiss={onDismiss}
            dates={dates}
            onConfirm={onConfirm}
          />
        </View>
      </SafeAreaProvider>
    )
}
