import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import Profile from "../screens/Profile";
import LogIn from "../screens/LogIn";
import OwnPosts from "../screens/OwnPosts";
import Favourites from "../screens/Favourites";
import UserNotifications from "../screens/UserNotifications";
import About from "../screens/About";

const StackController = createNativeStackNavigator();

export default function ProfileController({ navigation }) {
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <StackController.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerLeft: (props) => (
          <TouchableOpacity
            {...props}
            onPress={() => {
              navigation.navigate("Profile");
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
        name="Profile"
        component={user ? Profile : LogIn}
        options={{ headerShown: false }}
      />
      <StackController.Screen
        name="OwnPosts"
        component={OwnPosts}
        options={{
          title: "Publicações próprias",
        }}
      />
      <StackController.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: "Favouritos",
        }}
      />
      <StackController.Screen
        name="UserNotifications"
        component={UserNotifications}
        options={{
          title: "Notificações",
        }}
      />
      <StackController.Screen
        name="About"
        component={About}
        options={{
          title: "Sobre",
        }}
      />
    </StackController.Navigator>
  );
}
