import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <Stack.Navigator style={{ backgroundColor: "white" }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
