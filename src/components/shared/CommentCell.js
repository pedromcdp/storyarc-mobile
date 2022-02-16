import { Text, HStack, Box, VStack } from "native-base";
import { View, Image } from "react-native";

import db from "../../../server/db.json";

export default function CommentCell({ comment }) {
  user = db.users.find((user) => user.id === comment.userId);

  return (
    <HStack space={2} px={4} pb={0.5} pt={3}>
      <Image
        source={{ uri: user.avatar }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 100,
          borderWidth: 1.3,
          borderColor: "#37B780",
        }}
      />
      <VStack
        bg="#e6e6e6"
        pl={4}
        pr={10}
        pt={0.5}
        pb={2}
        borderBottomRadius={"lg"}
        borderTopRightRadius={"lg"}
      >
        <Text fontFamily="Poppins_500Medium">{user.name}</Text>
        <Text fontFamily="Poppins_400Regular">{comment.body}</Text>
      </VStack>
    </HStack>
  );
}
