import { VStack, FlatList, Box } from "native-base";
import { ActivityIndicator } from "react-native";
import {
  PostComponent,
  ModalFooter,
  CommentCell,
  EmptyCommentList,
} from "../components/";

import db from "../../server/db.json";
import { useGetPostCommentsQuery } from "../services/storyarc";

export function Post({ route }) {
  const post = route.params.content;
  // const comments = db.comments.filter(
  //   (comments) => comments.postId === post.id
  // );

  const {
    data: comments,
    isLoading: commentsLoading,
    isFetching: commentsFetching,
    refetch,
  } = useGetPostCommentsQuery({ postId: post.id });

  return (
    <VStack flex={1} bg={"white"}>
      <FlatList
        ListHeaderComponent={
          <PostComponent isScreen post={post} isLoaded={true} />
        }
        ListEmptyComponent={() => {
          return !commentsLoading ? (
            <EmptyCommentList erro="Sem comentários" />
          ) : (
            <ActivityIndicator style={{ paddingTop: 20 }} />
          );
        }}
        data={comments}
        initialNumToRender={5}
        renderItem={({ item }) => <CommentCell comment={item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <Box size="10" />}
      />
      <ModalFooter id={post.id} refetch={refetch} />
    </VStack>
  );
}
