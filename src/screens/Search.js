//Packages Imports
import { useState, useEffect } from "react";
import { VStack, Text, Pressable, FlatList } from "native-base";
//Components
import { SearchBar } from "../components";

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
    setSearchResults(
      locations.filter((location) => {
        const regex = new RegExp(`^${searchInput}`, "gi");
        return location.streetName.match(regex);
      })
    );
  }

  return (
    <VStack
      flex={1}
      bg={searchResults?.length === 0 ? "rgba(0, 0, 0, 0.8)" : "white"}
    >
      <SearchBar
        navigation={navigation}
        value={searchInput}
        setValue={setSearchInput}
        handleChange={handleChange}
      />
      <FlatList
        pt={2}
        data={searchResults}
        renderItem={({ item }) => (
          <SearchResultCell location={item.streetName} />
        )}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}

function SearchResultCell({ location }) {
  return (
    <Pressable
      bg="white"
      borderBottomWidth={1}
      borderBottomColor="#E2E2E2"
      _pressed={{ bg: "coolGray.100" }}
    >
      <Text
        py={6}
        px={4}
        fontFamily="Poppins_500Medium"
        color="black"
        fontSize={14}
      >
        {location}
      </Text>
    </Pressable>
  );
}
