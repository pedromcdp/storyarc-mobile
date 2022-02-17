// import { KeyboardAvoidingView } from "react-native";
import { VStack, KeyboardAvoidingView, ScrollView } from "native-base";
import { PostComponent, ModalFooter } from "../components/";
import db from "../../server/db.json";
import ModalBody from "../components/home/commentsModal/ModalBody";

export function Post({ route }) {
  console.log(route.params);
  const post = route.params.content;

  return (
    <KeyboardAvoidingView flex={1}>
      <ScrollView
        flex={1}
        bg="white"
        // justifyContent={"flex-end"}
        _contentContainerStyle={{ justifyContent: "space-between" }}
      >
        <PostComponent isScreen post={post} isLoaded={true} />
        <ModalBody />
      </ScrollView>
      <ModalFooter />
    </KeyboardAvoidingView>
  );
}
