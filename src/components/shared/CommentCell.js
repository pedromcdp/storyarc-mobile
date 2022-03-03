//Packages Imports
import { Text, HStack, VStack } from "native-base";
import { Image } from "react-native";

//db
import db from "../../../server/db.json";
import { useGetCommentOwnerQuery } from "../../services/storyarc";

export function CommentCell({ comment }) {
  user = db.users.find((user) => user.id === 2);
  const { data, isLoading, isFetching } = useGetCommentOwnerQuery({
    uid: comment.userId,
  });

  if (isLoading || isFetching) {
    return null;
  }

  return (
    <HStack space={2} px={4} pb={0.5} pt={3}>
      <Image
        source={
          data
            ? { uri: data[0].avatar }
            : require("../../../assets/images/user_img.png")
        }
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
        <Text fontFamily="Poppins_500Medium">{data[0]?.name}</Text>
        <Text fontFamily="Poppins_400Regular">{comment.body}</Text>
      </VStack>
    </HStack>
  );
}
