import { Dimensions, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from "./nav/Menu";

const { width } = Dimensions.get("screen");

const profile = {
    avatar: '',//Images.Profile,
    name: "Rachel Brown",
    type: "Seller",
    plan: "Pro",
    rating: 4.8,
};

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                // style={{ flex: 1 }}
                screenOptions={{ headerShown: true, swipeEdgeWidth : 0}}
                // drawerContent={(props: any) => (
                //     <CustomDrawerContent {...props} profile={profile} />
                // )}
              >
                                <Drawer.Screen
                name="home"
                options={{
                  drawerLabel: "Home",
                  title: "Home",
                }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}

