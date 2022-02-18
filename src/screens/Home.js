//Packages Imports
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MotiView } from "moti";
//Components
import { Header, HeaderSearch, Feed, Map } from "../components";

const renderScene = SceneMap({
  explore: Feed,
  map: Map,
});

export function Home({ navigation }) {
  const insets = useSafeAreaInsets();
  // const showSearch = useSelector(useShowSearch);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
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
    <>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "timing",
          duration: 320,
        }}
        style={{ flex: 1, backgroundColor: "#fff", paddingTop: insets.top }}
      >
        <StatusBar style="dark" />
        <Header />
        <HeaderSearch navigation={navigation} />
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
      </MotiView>
    </>
  );
}
