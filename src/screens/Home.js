import React from "react";
import tw from "twrnc";
import { View, useWindowDimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Map from "../components/home/Map";
import Header from "../components/home/Header";
import HeaderSearch from "../components/home/HeaderSearch";

const FirstRoute = () => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f6f6f6",
    }}
  >
    <Text>Home</Text>
  </View>
);

const renderScene = SceneMap({
  explore: FirstRoute,
  map: Map,
});

export default function Home() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "explore", title: "Explorar" },
    { key: "map", title: "Mapa" },
  ]);

  const renderLabel = (scene) => {
    const label = scene.route.title;

    return (
      <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 15 }}>
        {label}
      </Text>
    );
  };
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={{
        backgroundColor: "#fff",

        shadowOffset: { height: 0, width: 0 },
        shadowColor: "transparent",
        shadowOpacity: 0,
        elevation: 0,
      }}
      indicatorStyle={{ backgroundColor: "#37B780" }}
      renderLabel={renderLabel}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <HeaderSearch />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        swipeEnabled={false}
        style={{
          backgroundColor: "white",
        }}
      />
    </SafeAreaView>
  );
}
