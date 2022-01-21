import React, { useState } from "react";
("react");
import { View, useWindowDimensions, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MotiView, AnimatePresence } from "moti";
// import Map from "../components/home/Map";
import Header from "../components/home/Header";
import HeaderSearch from "../components/home/HeaderSearch";
import Blur from "../components/shared/Blur";
import SearchBar from "../components/shared/SearchBar";
import { useSelector } from "react-redux";
import { useShowSearch } from "../features/HomeSlice";
import tw from "twrnc";

const FirstRoute = () => (
  <View style={tw`px-4 pt-2 bg-[#f6f6f6] flex-1 items-center justify-center`}>
    <Text>Home</Text>
  </View>
);

const renderScene = SceneMap({
  explore: FirstRoute,
  map: FirstRoute,
});

export default function Home() {
  const insets = useSafeAreaInsets();
  const showSearch = useSelector(useShowSearch);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
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
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "timing",
        duration: 320,
      }}
      style={{ flex: 1, backgroundColor: "#fff", paddingTop: insets.top }}
    >
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
    </MotiView>
  );
}
