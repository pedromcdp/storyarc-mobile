import { VStack, FlatList, Box } from "native-base";
import { ActivityIndicator } from "react-native";
import { EmptyCommentList, PostComponent } from "../components";
import { useSelector } from "react-redux";
import { useUser } from "../features/UserSlice";
import db from "../../server/db.json";
import {
  useGetUserPostsQuery,
  useGetUserSavedPostsQuery,
} from "../services/storyarc";

export function OwnPosts() {
  const currentUser = useSelector(useUser);
  // const userPosts = db.posts.filter((post) => post.userId === currentUser.uid);
  const {
    data: userPosts,
    isFetching,
    isLoading,
  } = useGetUserPostsQuery({ uid: currentUser.uid });

  return (
    <VStack flex="1" bg="white">
      <FlatList
        data={userPosts}
        initialNumToRender={6}
        ListEmptyComponent={() => {
          return !isLoading ? (
            <EmptyCommentList erro="Sem publicações" />
          ) : (
            <ActivityIndicator style={{ paddingTop: 20 }} />
          );
        }}
        renderItem={({ item }) => <PostComponent post={item} isLoaded />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <Box size="32" />}
      />
    </VStack>
  );
}
