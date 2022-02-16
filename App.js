import { StatusBar } from "expo-status-bar";
import { Modal, Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import NavigationController from "./src/navigation/NavigationController";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { config } from "./src/theme";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider config={config}>
        <StatusBar style="dark" />
        <Provider store={store}>
          <Modal visible={false}>
            <Text>Modalllll</Text>
          </Modal>
          <NavigationContainer>
            <NavigationController />
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    );
  }
}
