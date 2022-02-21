import { VStack, FlatList, Box } from "native-base";
import {
  PostComponent,
  ModalFooter,
  CommentCell,
  EmptyCommentList,
} from "../components/";

import db from "../../server/db.json";

export function Post({ route }) {
  const post = route.params.content;
  const comments = db.comments.filter(
    (comments) => comments.postId === post.id
  );

  return (
    <VStack flex={1} bg={"white"}>
      <FlatList
        ListHeaderComponent={
          <PostComponent isScreen post={post} isLoaded={true} />
        }
        ListEmptyComponent={() => <EmptyCommentList erro="Sem comentários" />}
        data={comments}
        initialNumToRender={2}
        renderItem={({ item }) => <CommentCell comment={item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <Box size="10" />}
      />
      <ModalFooter />
    </VStack>
  );
}
