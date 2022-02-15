//Packages Imports
import { useState, useCallback } from "react";
import { ScrollView, FlatList } from "native-base";
import { RefreshControl } from "react-native";
//Components
import HighlightContent from "./HighlightContent";
import HighlightPost from "./HighlightPost";
import Post from "./Post";

export function Feed() {
  const data = [...Array(10)];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <ScrollView
      flex={1}
      bg="#f6f6f6"
      pt={4}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <HighlightContent isLoaded={isLoaded}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={3}
          renderItem={({ item, index }) => (
            <HighlightPost index={index} isLoaded={isLoaded} />
          )}
          keyExtractor={(item, index) => index}
        />
      </HighlightContent>
      <Post isLoaded={isLoaded} />
    </ScrollView>
  );
}
