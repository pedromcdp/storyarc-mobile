import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import auth from "@react-native-firebase/auth";

import { useAppSettings } from "../features/AppSettingsSlice";
import { setUser } from "../features/UserSlice";

import TabBar from "../components/shared/TabBar";
import HomeFilled from "../../assets/images/HomeFilled.svg";
import HomeRegular from "../../assets/images/HomeRegular.svg";
import PersonFilled from "../../assets/images/PersonFilled.svg";
import PersonRegular from "../../assets/images/PersonRegular.svg";
import HomeController from "./HomeController";
import ProfileController from "./ProfileController";
import { Post } from "../screens";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AddButton from "../components/shared/AddButton";

const TabController = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function NavigationController() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",
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
      })}
    >
      <Stack.Screen name="TabBar" component={TabBarController} />
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerShown: true,
          title: "Publicação",
        }}
      />
    </Stack.Navigator>
  );
}

function TabBarController() {
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
          // tabBarHideOnKeyboard: true,
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
