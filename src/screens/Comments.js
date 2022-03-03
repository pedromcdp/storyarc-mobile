//Packages Imports
import { VStack, Box, FlatList } from "native-base";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
//Components
import {
  CommentCell,
  ModalFooter,
  ModalHeader,
  EmptyCommentList,
} from "../components";
//db
import db from "../../server/db.json";
import { useGetPostCommentsQuery } from "../services/storyarc";

export function Comments({ navigation, route }) {
  const { post } = route.params;
  const {
    data: comments,
    isLoading: commentsLoading,
    isFetching: commentsFetching,
    refetch,
  } = useGetPostCommentsQuery({ postId: post.id });

  return (
    <VStack flex={1} justifyContent={"flex-end"}>
      <StatusBar style="light" />
      <VStack h="90%" bg={"white"} borderTopRadius="xl">
        <ModalHeader navigation={navigation} />
        <FlatList
          data={comments}
          initialNumToRender={10}
          ListEmptyComponent={() => {
            return !commentsLoading ? (
              <EmptyCommentList erro="Sem comentários" />
            ) : (
              <ActivityIndicator style={{ paddingTop: 20 }} />
            );
          }}
          renderItem={({ item }) => <CommentCell comment={item} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <Box size="10" />}
        />
        <ModalFooter id={post.id} refetch={refetch} />
      </VStack>
    </VStack>
  );
}
