import { VStack, HStack, Box, Text } from "native-base";
import { TouchableOpacity, FlatList, View, ScrollView } from "react-native";
import db from "../../../../server/db.json";
import CommentCell from "../../shared/CommentCell";

export default function ModalBody() {
  comments = db.comments;
  const data = [...Array(30)];
  return (
    <ScrollView bg="#f6f6f6" flex={1} height="100%">
      <TouchableOpacity activeOpacity={1}>
        <FlatList
          data={comments}
          initialNumToRender={3}
          renderItem={({ item }) => <CommentCell comment={item} />}
          keyExtractor={(item) => item.id}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}
