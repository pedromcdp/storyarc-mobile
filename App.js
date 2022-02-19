import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationController } from "./src/navigation";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { theme } from "./src/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar style="dark" />
        <NativeBaseProvider theme={theme} config={theme.config}>
          <NavigationContainer>
            <NavigationController />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    );
  }
}
