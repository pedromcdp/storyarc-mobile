//Packages Imports
import { useState, useEffect } from "react";
import { VStack, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
//Components
import { SearchBar, SearchResultCell } from "../components";
//db
import db from "../../server/db.json";

export function Search({ navigation }) {
  const { locations } = db;
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchInput?.length === 0) {
      setSearchResults([]);
    }
    return () => {};
  }, [searchInput]);

  function handleChange() {
    if (searchInput?.length > 0) {
      setSearchResults(
        locations.filter((location) => {
          const regex = new RegExp(`^${searchInput}`, "gi");
          return location.name.match(regex);
        })
      );
    }
  }

  return (
    <VStack
      flex={1}
      bg={searchResults?.length === 0 ? "rgba(255, 255, 255, 1)" : "white"}
    >
      <SearchBar
        navigation={navigation}
        value={searchInput}
        setValue={setSearchInput}
        handleChange={handleChange}
      />
      {searchInput.length === 0 ? (
        <VStack space={3} alignItems="center" justifyContent={"center"}>
          <LottieView
            source={require("../animations/searching.json")}
            autoPlay
            loop
            style={{ width: 100, height: 80 }}
          />
          <Text fontFamily="Poppins_400Regular">
            Comece a digitar para lhe aparecerem sugestões
          </Text>
        </VStack>
      ) : (
        searchResults?.map((location) => (
          <SearchResultCell key={location.id} location={location.name} />
        ))
      )}
    </VStack>
  );
}
