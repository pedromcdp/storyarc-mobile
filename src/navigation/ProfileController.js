//Packages Imports
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
//Redux
import { useUser } from "./../features/UserSlice";
//Screens
import {
  Profile,
  LogIn,
  OwnPosts,
  Favourites,
  UserNotifications,
  About,
  Terms,
  Policy,
} from "../screens";

const StackController = createNativeStackNavigator();

export function ProfileController() {
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
          <StackController.Group
            screenOptions={({ navigation, route }) => ({
              title: route.params.title,
              presentation: "modal",
              headerLeft: () => {
                Platform.OS === "ios" && null;
              },
              headerRight: (props) =>
                Platform.OS === "ios" && (
                  <TouchableOpacity
                    {...props}
                    onPress={() => {
                      navigation.goBack();
                    }}
                    style={{
                      backgroundColor: "#f6f6f6",
                      borderRadius: 50,
                      padding: 4,
                    }}
                  >
                    <AntDesign name="close" size={24} />
                  </TouchableOpacity>
                ),
            })}
          >
            <StackController.Screen name="Terms" component={Terms} />
            <StackController.Screen name="Policy" component={Policy} />
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
