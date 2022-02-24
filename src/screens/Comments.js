//Packages Imports
import { VStack, Box, FlatList } from "native-base";
import { StatusBar } from "expo-status-bar";
//Components
import {
  CommentCell,
  ModalFooter,
  ModalHeader,
  EmptyCommentList,
} from "../components";
//db
import db from "../../server/db.json";

export function Comments({ navigation, route }) {
  const { post } = route.params;
  const comments = db.comments.filter(
    (comments) => comments.postId === post.id
  );

  return (
    <VStack flex={1} justifyContent={"flex-end"}>
      <StatusBar style="light" />
      <VStack h="90%" bg={"white"} borderTopRadius="xl">
        <ModalHeader navigation={navigation} />
        <FlatList
          data={comments}
          initialNumToRender={10}
          ListEmptyComponent={() => <EmptyCommentList erro="Sem comentários" />}
          renderItem={({ item }) => <CommentCell comment={item} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <Box size="10" />}
        />
        <ModalFooter id={post.id} />
      </VStack>
    </VStack>
  );
}
