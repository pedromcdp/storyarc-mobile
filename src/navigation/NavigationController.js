import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useAppSettings } from "../features/AppSettingsSlice";
import TabBar from "../components/shared/TabBar";
import HomeFilled from "../../assets/images/HomeFilled.svg";
import HomeRegular from "../../assets/images/HomeRegular.svg";
import PersonFilled from "../../assets/images/PersonFilled.svg";
import PersonRegular from "../../assets/images/PersonRegular.svg";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import LogIn from "../screens/LogIn";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";

const TabController = createBottomTabNavigator();
const StackController = createNativeStackNavigator();

export default function NavigationController() {
  const isLoggedIn = false;
  const settings = useSelector(useAppSettings);

  return (
    <TabController.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        detachInactiveScreens: true,
        tabBarShowLabel: settings.showTabBarLabel,
        tabBarBackground: () => <TabBar />,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
        },
        tabBarLabelStyle: { fontFamily: "Poppins_400Regular" },
        headerShown: false,
        tabBarActiveTintColor: "#000",
      }}
    >
      <TabController.Screen
        name="TabHome"
        component={HomeController}
        options={{
          title: "Ecrã inicial",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <HomeFilled
                width={settings.showTabBarLabel ? 25 : 30}
                height={settings.showTabBarLabel ? 25 : 30}
                style={{
                  color: "black",
                }}
              />
            ) : (
              <HomeRegular
                width={settings.showTabBarLabel ? 25 : 30}
                height={settings.showTabBarLabel ? 25 : 30}
                style={{
                  color: "black",
                }}
              />
            );
          },
        }}
      />
      <TabController.Screen
        name="Profile"
        component={isLoggedIn ? Profile : LogIn}
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <PersonFilled
                width={settings.showTabBarLabel ? 25 : 30}
                height={settings.showTabBarLabel ? 25 : 30}
                style={{
                  color: "black",
                }}
              />
            ) : (
              <PersonRegular
                width={settings.showTabBarLabel ? 25 : 30}
                height={settings.showTabBarLabel ? 25 : 30}
                style={{
                  color: "black",
                }}
              />
            );
          },
        }}
      />
    </TabController.Navigator>
  );
}

function HomeController({ navigation }) {
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
