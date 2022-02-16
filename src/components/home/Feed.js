//Packages Imports
import { useState, useCallback } from "react";
import { Box, ScrollView, FlatList } from "native-base";
import { RefreshControl } from "react-native";
//Components
import HighlightContent from "./HighlightContent";
import HighlightPost from "./HighlightPost";
import Post from "./PostComponent";
//db
import db from "../../../server/db.json";

export function Feed() {
  const data = [...Array(10)];
  content = db.posts;

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
      <FlatList
        data={content}
        initialNumToRender={1}
        renderItem={({ item }) => <Post post={item} isLoaded={isLoaded} />}
        keyExtractor={(item) => item.id}
      />
      {/* <Post isLoaded={isLoaded} />
      <Post isLoaded={isLoaded} /> */}
      <Box size="3xs" />
    </ScrollView>
  );
}
