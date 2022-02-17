import {
  VStack,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
} from "native-base";
import { PostComponent, ModalFooter } from "../components/";
import CommentCell from "../components/shared/CommentCell";
import db from "../../server/db.json";
import ModalBody from "../components/home/commentsModal/ModalBody";

export function Post({ route }) {
  const post = route.params.content;
  comments = db.comments;
  const test = KeyboardAvoidingView;

  return (
    <VStack flex={1} bg={"white"}>
      <FlatList
        ListHeaderComponent={
          <PostComponent isScreen post={post} isLoaded={true} />
        }
        data={comments}
        initialNumToRender={2}
        renderItem={({ item }) => <CommentCell comment={item} />}
        keyExtractor={(item) => item.id}
      />
      <ModalFooter />
    </VStack>
  );
}
