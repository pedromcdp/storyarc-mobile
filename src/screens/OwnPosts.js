import { VStack, FlatList } from "native-base";
import { HighlightPost, EmptyCommentList } from "../components";
import { useSelector } from "react-redux";
import { useUser } from "../features/UserSlice";
import db from "../../server/db.json";

export function OwnPosts() {
  const currentUser = useSelector(useUser);
  const userPosts = db.posts.filter((post) => post.userId === currentUser.uid);

  return (
    <VStack flex="1" bg="white">
      <FlatList
        pt={3}
        px={4}
        data={userPosts}
        columnWrapperStyle={{ justifyContent: "center" }}
        numColumns={2} //2
        initialNumToRender={6}
        ListEmptyComponent={() => <EmptyCommentList erro="Sem publicações" />}
        renderItem={({ item }) => <HighlightPost post={item} isLoaded />}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}
