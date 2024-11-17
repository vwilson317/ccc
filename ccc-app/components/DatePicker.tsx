import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { Button, List, MD3Colors } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { useState, useCallback } from "react";
import { CalendarDate } from "react-native-paper-dates/lib/typescript/Date/Calendar";
import { useDateContext } from "./contexts/DateContext";
interface DateTimeObject {
    date: Date;
    startHrs: number;
    endHrs: number;
    startMins: number;
    endMins: number;
}

export default function DatePicker() {
    const { openHour, openMinute, closeHour, closeMinute } = useDateContext();
    const [dates, setDates] = useState<DateTimeObject[]>();
    const [open, setOpen] = useState(false);

    const onDismiss = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = useCallback((params: any) => {
        setOpen(false);
        setDates(params.dates.map((x: Date) => (
            {date: x, startHrs: openHour, endHrs: closeHour, startMins: openMinute, endMins: closeMinute})));
        console.log('[on-change-multi]', params);
    }, []); 

    const listItems = dates?.map((date: DateTimeObject, index) => (
        <List.Item key={index} title={date?.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} left={() => <List.Icon icon="folder" />} />
    ));

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
                    dates={dates?.map((date: DateTimeObject) => date.date)}
                    onConfirm={onConfirm}
                />

                <View style={{ width: '85%' }}>
                <List.Section>
                    <List.Subheader>Open Hours</List.Subheader>
                    {listItems}
                    {/* <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
                    <List.Item
                        title="Second Item"
                        left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
                    /> */}
                </List.Section>
                </View>

            </View>
        </SafeAreaProvider>
    )
}
