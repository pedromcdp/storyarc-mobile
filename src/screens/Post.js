import { VStack, FlatList } from "native-base";
import {
  PostComponent,
  ModalFooter,
  CommentCell,
  EmptyCommentList,
} from "../components/";

import db from "../../server/db.json";

export function Post({ route }) {
  const post = route.params.content;
  comments = db.comments;

  return (
    <VStack flex={1} bg={"white"}>
      <FlatList
        ListHeaderComponent={
          <PostComponent isScreen post={post} isLoaded={true} />
        }
        ListEmptyComponent={EmptyCommentList}
        data={comments}
        initialNumToRender={2}
        renderItem={({ item }) => <CommentCell comment={item} />}
        keyExtractor={(item) => item.id}
      />
      <ModalFooter />
    </VStack>
  );
}
