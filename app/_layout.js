import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {index} from "./index";
import Colors from "../constants/Colors";
import fonts from "./config/fonts";

export default function HomeLayout() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return <SplashScreen />;
  } else {
    // Render the children routes now that all the assets are loaded.

    return (
      <SafeAreaProvider>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.background,
            },
          }}
        />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
