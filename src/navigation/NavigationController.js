import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/shared/TabBar";
import HomeFilled from "../../assets/images/HomeFilled.svg";
import HomeRegular from "../../assets/images/HomeRegular.svg";
import PersonFilled from "../../assets/images/PersonFilled.svg";
import PersonRegular from "../../assets/images/PersonRegular.svg";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import LogIn from "../screens/LogIn";

const TabController = createBottomTabNavigator();

export default function NavigationController() {
  const isLoggedIn = false;
  return (
    <TabController.Navigator
      screenOptions={{
        detachInactiveScreens: true,
        tabBarShowLabel: false,
        tabBarBackground: () => <TabBar />,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
        },
        headerShown: false,
      }}
    >
      <TabController.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <HomeFilled
                width={30}
                height={30}
                style={{
                  color: "black",
                }}
              />
            ) : (
              <HomeRegular
                width={30}
                height={30}
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
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <PersonFilled
                width={30}
                height={30}
                style={{
                  color: "black",
                }}
              />
            ) : (
              <PersonRegular
                width={30}
                height={30}
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
