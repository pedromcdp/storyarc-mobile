import React, { useState } from "react";
("react");
import {
  View,
  useWindowDimensions,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MotiView, AnimatePresence } from "moti";
import Map from "../components/home/Map";
import Header from "../components/home/Header";
import HeaderSearch from "../components/home/HeaderSearch";
import Blur from "../components/shared/Blur";
import SearchBar from "../components/shared/SearchBar";
import { useSelector } from "react-redux";
import { useShowSearch } from "../features/HomeSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const showSearch = useSelector(useShowSearch);
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
      pressColor={"white"}
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
      <AnimatePresence>{showSearch && <Blur />}</AnimatePresence>
      <AnimatePresence>{showSearch && <SearchBar />}</AnimatePresence>
    </SafeAreaView>
  );
}
