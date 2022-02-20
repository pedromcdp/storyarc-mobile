//Packages Imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//navigation
import { TabBarController } from "./TabBarController";
//screens
import { Post, SearchResults, Comments } from "../screens";

const Stack = createNativeStackNavigator();

export function NavigationController() {
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
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        options={({ navigation, route }) => ({
          headerShown: true,
          title: route.params.title,
        })}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="CommentsModal"
          component={Comments}
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
