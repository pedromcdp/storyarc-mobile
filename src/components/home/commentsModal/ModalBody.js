import { Box, ScrollView, FlatList } from "native-base";
import { TouchableOpacity } from "react-native";
import db from "../../../../server/db.json";
import CommentCell from "../../shared/CommentCell";

export default function ModalBody() {
  comments = db.comments;
  return (
    <Box flex={1}>
      <FlatList
        nestedScrollEnabled
        data={comments}
        initialNumToRender={10}
        renderItem={({ item }) => <CommentCell comment={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}
