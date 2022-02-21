import { VStack, FlatList, Box } from "native-base";
import { EmptyCommentList, PostComponent } from "../components";
import { useSelector } from "react-redux";
import { useUser } from "../features/UserSlice";
import db from "../../server/db.json";

export function OwnPosts() {
  const currentUser = useSelector(useUser);
  const userPosts = db.posts.filter((post) => post.userId === currentUser.uid);

  return (
    <VStack flex="1" bg="white">
      <FlatList
        data={userPosts}
        initialNumToRender={6}
        ListEmptyComponent={() => <EmptyCommentList erro="Sem publicações" />}
        renderItem={({ item }) => <PostComponent post={item} isLoaded />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <Box size="32" />}
      />
    </VStack>
  );
}
