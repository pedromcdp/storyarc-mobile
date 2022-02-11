import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { useUser } from "./../features/UserSlice";

import {
  Profile,
  LogIn,
  OwnPosts,
  Favourites,
  UserNotifications,
  About,
  Terms,
} from "../screens";

const StackController = createNativeStackNavigator();

export default function ProfileController() {
  const user = useSelector(useUser);

  return (
    <StackController.Navigator
      screenOptions={({ navigation }) => ({
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
      })}
    >
      {user ? (
        <>
          <StackController.Group>
            <StackController.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
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
          </StackController.Group>
          <StackController.Group screenOptions={{ presentation: "modal" }}>
            <StackController.Screen
              name="Terms"
              component={Terms}
              options={{ presentation: "modal" }}
            />
          </StackController.Group>
        </>
      ) : (
        <>
          <StackController.Screen
            name="LogIn"
            component={LogIn}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </StackController.Navigator>
  );
}
