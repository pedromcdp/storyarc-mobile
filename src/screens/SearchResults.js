//Packages Imports
import { VStack, Box, FlatList } from "native-base";
//Components
import { EmptyCommentList, PostComponent } from "../components";
//db
import db from "../../server/db.json";

export function SearchResults({ navigation, route }) {
  const location = route.params.title;
  const matchedPosts = db.posts.filter((post) => {
    return post.streetName === location;
  });

  return (
    <VStack flex={1} bg="#f6f6f6">
      <FlatList
        data={matchedPosts}
        initialNumToRender={3}
        renderItem={({ item }) => (
          <PostComponent post={item} isLoaded searchResult />
        )}
        ListEmptyComponent={() => <EmptyCommentList erro="Sem publicações" />}
        ListFooterComponent={() => <Box size="32" />}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}
