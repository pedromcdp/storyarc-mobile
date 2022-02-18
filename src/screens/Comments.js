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
  const comments = db.comments;

  return (
    <VStack flex={1} justifyContent={"flex-end"}>
      <StatusBar style="light" />
      <VStack h="90%" bg={"white"} borderTopRadius="xl">
        <ModalHeader navigation={navigation} />
        <FlatList
          data={comments}
          initialNumToRender={10}
          ListEmptyComponent={EmptyCommentList}
          renderItem={({ item }) => <CommentCell comment={item} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <Box size="10" />}
        />
        <ModalFooter />
      </VStack>
    </VStack>
  );
}
