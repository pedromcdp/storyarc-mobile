//Packages Imports
import { useState, useCallback } from "react";
import { Box, FlatList, ZStack, VStack, Skeleton } from "native-base";
import { RefreshControl } from "react-native";
//Components
import HighlightContent from "./HighlightContent";
import { HighlightPost } from "./HighlightPost";
import { PostComponent } from "./PostComponent";
import { LoadingHighlight } from "./LoadingHighlight";
import { LoadingPost } from "./LoadingPost";
//db
import { useGetAllPostQuery } from "../../services/storyarc";

export function Feed() {
  const { data, isFetching, isLoading } = useGetAllPostQuery();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  if (isLoading || isFetching) {
    return (
      <Box flex={1} bg="#f6f6f6">
        <FlatList
          pt={4}
          pb={"72"}
          ListHeaderComponent={() => (
            <HighlightContent isLoaded={false}>
              <FlatList
                data={[...Array(3)]}
                horizontal
                showsHorizontalScrollIndicator={false}
                initialNumToRender={3}
                renderItem={({ item, index }) => (
                  <LoadingHighlight index={index} />
                )}
                keyExtractor={(item, index) => index}
              />
            </HighlightContent>
          )}
          data={[...Array(2)]}
          initialNumToRender={2}
          renderItem={({ item, index }) => <LoadingPost />}
          keyExtractor={(item, index) => index}
        />
      </Box>
    );
  }

  return (
    <Box flex={1} bg="#f6f6f6">
      <FlatList
        pt={4}
        pb={"72"}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={() => (
          <HighlightContent isLoaded={!isLoading ? true : false}>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              initialNumToRender={3}
              renderItem={({ item, index }) => (
                <HighlightPost
                  index={index}
                  isLoaded={!isLoading ? true : false}
                  post={item}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </HighlightContent>
        )}
        data={data}
        initialNumToRender={1}
        renderItem={({ item }) => (
          <PostComponent post={item} isLoaded={!isLoading ? true : false} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <Box size="32" />}
      />
    </Box>
  );
}

{
  /* <HighlightContent isLoaded={false}>
<FlatList
  data={[...Array(3)]}
  horizontal
  showsHorizontalScrollIndicator={false}
  initialNumToRender={3}
  renderItem={({ item, index }) => <LoadingHighlight index={index} />}
  keyExtractor={(item, index) => index}
/>
</HighlightContent> */
}
