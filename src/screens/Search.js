//Packages Imports
import { useState, useEffect } from "react";
import { VStack } from "native-base";
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
          return location.streetName.match(regex);
        })
      );
    }
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
      {searchResults?.map((location) => (
        <SearchResultCell key={location.id} location={location.streetName} />
      ))}
    </VStack>
  );
}
