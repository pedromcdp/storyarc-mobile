import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/shared/TabBar";
import HomeFilled from "../../assets/images/HomeFilled.svg";
import HomeRegular from "../../assets/images/HomeRegular.svg";
import PersonFilled from "../../assets/images/PersonFilled.svg";
import PersonRegular from "../../assets/images/PersonRegular.svg";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const TabController = createBottomTabNavigator();

export default function NavigationController() {
  return (
    <TabController.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused ? (
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
          } else if (route.name === "Profile") {
            icon = focused ? (
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
          }
          return icon;
        },
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
      })}
    >
      <TabController.Screen name="Home" component={Home} />
      <TabController.Screen name="Profile" component={Profile} />
    </TabController.Navigator>
  );
}

/*initialRouteName="Home"
                // tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let icon;

                    if (route.name === "Home") {
                      icon = focused ? (
                        <HomeFilled
                          width={35}
                          height={35}
                          style={{
                            color: colorScheme === "light" ? "black" : "white",
                          }}
                        />
                      ) : (
                        <HomeRegular
                          width={35}
                          height={35}
                          style={{
                            color: colorScheme === "light" ? "black" : "white",
                          }}
                        />
                      );
                    } else if (route.name === "Perfil") {
                      icon = focused ? (
                        <PersonFilled
                          width={35}
                          height={35}
                          style={{
                            color: colorScheme === "light" ? "black" : "white",
                          }}
                        />
                      ) : (
                        <PersonRegular
                          width={35}
                          height={35}
                          style={{
                            color: colorScheme === "light" ? "black" : "white",
                          }}
                        />
                      );
                    }
                    return icon;
                  },
                  detachInactiveScreens: true,
                  tabBarShowLabel: false,
                  tabBarBackground: () => <TabBarBG />,
                  tabBarStyle: {
                    backgroundColor: "transparent",
                    borderTopWidth: 0,
                    position: "absolute",
                    elevation: 0,
                  },
                  tabBarInactiveTintColor: "gray",
                  tabBarActiveTintColor: "gray",
                })} */
