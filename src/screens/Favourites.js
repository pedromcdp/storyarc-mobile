import { VStack, FlatList, Box } from "native-base";
import { EmptyCommentList, PostComponent } from "../components";
import { useSelector } from "react-redux";
import { useUser } from "../features/UserSlice";
import db from "../../server/db.json";

export function Favourites() {
  const currentUser = useSelector(useUser);
  const userSavedPosts = db.savedPosts.find(
    (savedPosts) => savedPosts.userId === currentUser.uid
  );

  return (
    <VStack flex={1} bg="white">
      <FlatList
        data={userSavedPosts?.posts}
        initialNumToRender={6}
        ListEmptyComponent={() => <EmptyCommentList erro="Sem favouritos" />}
        renderItem={({ item }) => <PostComponent post={item} isLoaded saved />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <Box size="32" />}
      />
    </VStack>
  );
}
