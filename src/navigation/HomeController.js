//Packages Imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//Screens
import {
  Home,
  Notifications,
  Settings,
  Comments,
  Search,
  SearchResults,
} from "../screens";

const StackController = createNativeStackNavigator();

export function HomeController() {
  const navigation = useNavigation();
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
      <StackController.Group>
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
        <StackController.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
      </StackController.Group>
      <StackController.Group screenOptions={{ presentation: "modal" }}>
        <StackController.Screen
          name="Comments"
          component={Comments}
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </StackController.Group>
    </StackController.Navigator>
  );
}
