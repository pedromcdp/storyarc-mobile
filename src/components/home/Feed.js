//Packages Imports
import { useState, useCallback } from "react";
import { Box, FlatList } from "native-base";
import { RefreshControl } from "react-native";
//Components
import HighlightContent from "./HighlightContent";
import { HighlightPost } from "./HighlightPost";
import { PostComponent } from "./PostComponent";
//db
import db from "../../../server/db.json";

export function Feed() {
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
    <Box flex={1} bg="#f6f6f6">
      <FlatList
        pt={4}
        pb={"72"}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={() => (
          <HighlightContent isLoaded={isLoaded}>
            <FlatList
              data={content}
              horizontal
              showsHorizontalScrollIndicator={false}
              initialNumToRender={3}
              renderItem={({ item, index }) => (
                <HighlightPost index={index} isLoaded={isLoaded} post={item} />
              )}
              keyExtractor={(item) => item.id}
            />
          </HighlightContent>
        )}
        data={content}
        initialNumToRender={1}
        renderItem={({ item }) => (
          <PostComponent post={item} isLoaded={isLoaded} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <Box size="32" />}
      />
    </Box>
  );
}
