import { CalendarDates } from "react-native-paper-dates/lib/typescript/Date/Calendar";
import { createContext, useContext, useState } from "react";
export interface DateContextType {
    dates: CalendarDates;
    setDates: (dates: CalendarDates) => void;
    // openHour: string;
    // setOpenHour: (hour: string) => void;
    // openMinute: string;
    // setOpenMinute: (minute: string) => void;
    // closeHour: string;
    // setCloseHour: (hour: string) => void;
    // closeMinute: string;
    // setCloseMinute: (minute: string) => void;
}

const DateContext = createContext<DateContextType>({
    dates: [],
    setDates: () => { },
});

export function DateProvider({ children }: { children: ReactNode }) {
    const [dates, setDates] = useState<CalendarDates>([]);
    // const [openHour, setOpenHour] = useState<string>('07');
    // const [openMinute, setOpenMinute] = useState<string>('00');
    // const [closeHour, setCloseHour] = useState<string>('17');
    // const [closeMinute, setCloseMinute] = useState<string>('00');

    return (
        <DateContext.Provider value={{
            dates,
            setDates,
            // openHour,
            // setOpenHour,
            // openMinute,
            // setOpenMinute,
            // closeHour,
            // setCloseHour,
            // closeMinute,
            // setCloseMinute
        }}>
            {children}
        </DateContext.Provider>
    );
}

export function useDateContext() {
    const context = useContext(DateContext);
    if (context === undefined) {
        throw new Error('useDateContext must be used within a DateProvider');
    }
    return context;
}