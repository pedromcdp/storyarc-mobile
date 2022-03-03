//Packages Imports
import { VStack, Box, FlatList } from "native-base";
import { ActivityIndicator } from "react-native";
//Components
import { EmptyCommentList, PostComponent } from "../components";
//db
import db from "../../server/db.json";
import { useGetSearchResultsQuery } from "../services/storyarc";

export function SearchResults({ navigation, route }) {
  const location = route.params.title;
  const {
    data: searchResults,
    isLoading,
    isFetching,
    error,
  } = useGetSearchResultsQuery({ rua: location });

  if (isLoading || isFetching) {
    return <ActivityIndicator />;
  }

  return (
    <VStack flex={1} bg="#f6f6f6">
      <FlatList
        data={searchResults}
        initialNumToRender={3}
        renderItem={({ item }) => <PostComponent post={item} isLoaded />}
        ListEmptyComponent={() => <EmptyCommentList erro="Sem publicações" />}
        ListFooterComponent={() => <Box size="32" />}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}
