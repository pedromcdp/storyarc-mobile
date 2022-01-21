import { NativeBaseProvider, Box } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import NavigationController from "./src/navigation/NavigationController";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <NavigationController />
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    );
  }
}
