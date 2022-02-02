import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const StackController = createNativeStackNavigator();

export default function HomeController({ navigation }) {
  return (
    <StackController.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerLeft: (props) => (
          <TouchableOpacity
            {...props}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          fontFamily: "Poppins_500Medium",
          fontSize: 18,
        },
      }}
    >
      <StackController.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <StackController.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notificações",
        }}
      />
      <StackController.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Definições",
        }}
      />
    </StackController.Navigator>
  );
}
