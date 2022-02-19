//Packages Imports
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Firebase
import auth from "@react-native-firebase/auth";
//redux
import { useSelector, useDispatch } from "react-redux";
import { useAppSettings } from "../features/AppSettingsSlice";
import { setUser } from "../features/UserSlice";
//svg's
import HomeFilled from "../../assets/images/HomeFilled.svg";
import HomeRegular from "../../assets/images/HomeRegular.svg";
import PersonFilled from "../../assets/images/PersonFilled.svg";
import PersonRegular from "../../assets/images/PersonRegular.svg";
//Navigation Controllers
import { HomeController } from "./HomeController";
import { ProfileController } from "./ProfileController";
//Components
import { AddButton, TabBar } from "../components";

const TabController = createBottomTabNavigator();

export function TabBarController() {
  const settings = useSelector(useAppSettings);
  const dispatch = useDispatch();

  function onAuthStateChanged(user) {
    dispatch(setUser(user));
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <>
      <TabController.Navigator
        screenOptions={{
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
          name="TabProfile"
          component={ProfileController}
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
      <AddButton />
    </>
  );
}
