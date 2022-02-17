//Packages Imports
import {
  Text,
  VStack,
  HStack,
  Skeleton,
  Divider,
  Pressable,
} from "native-base";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
// redux
import { useDispatch } from "react-redux";
import {
  toggleShowCommentsModal,
  useShowCommentsModal,
} from "../../features/HomeSlice";
//svg's
import SaveFilled from "./../../../assets/images/saveFilled.svg";
import SaveOutline from "./../../../assets/images/saveOutline.svg";
import CommentOutline from "./../../../assets/images/CommentOutline.svg";
//Components
import CommentsModal from "./commentsModal";
//db
import db from "../../../server/db.json";
//utils
import { timeSince } from "../../utils/timeSince";

export function PostComponent({ isLoaded, isScreen, post }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = db.users.find((user) => user.id === post.userId);
  const currentUser = db.users.find(
    (user) => user.id === auth().currentUser.uid
  );
  const isSaved = db.posts.find((post) => post.id === currentUser.id);
  console.log(currentUser);

  return (
    <VStack
      bg="white"
      shadow="1"
      mt={isScreen ? 0 : 4}
      py={2}
      space={2}
      onStartShouldSetResponder={() =>
        navigation.navigate("Post", {
          content: post,
        })
      }
    >
      <HStack px={4} space={2} alignItems="center">
        <Skeleton
          size="10"
          rounded="full"
          isLoaded={isLoaded}
          startColor="coolGray.100"
          endColor="coolGray.300"
          borderWidth="1"
          borderColor="#37B780"
        >
          <Image
            source={{ uri: user.avatar }}
            style={{
              width: 35,
              height: 35,
              borderWidth: 1,
              borderColor: "#37B780",
              borderRadius: 100,
            }}
          />
        </Skeleton>
        <VStack w="full">
          <Skeleton.Text
            isLoaded={isLoaded}
            lines={2}
            w="2/4"
            startColor="coolGray.100"
            endColor="coolGray.300"
          >
            <Text fontFamily="Poppins_500Medium">{user.name}</Text>
            <Text fontFamily="Poppins_400Regular" sub>
              Publicado há {timeSince(post.postDate)}
            </Text>
          </Skeleton.Text>
        </VStack>
      </HStack>
      <Skeleton
        isLoaded={isLoaded}
        w="94%"
        h="40"
        alignSelf="center"
        startColor="coolGray.100"
        endColor="coolGray.300"
      >
        {post.description && (
          <Text px={4} pb={2}>
            {post.description}
          </Text>
        )}
        <HStack width="100%" height="sm">
          <Image
            source={{ uri: post.photo }}
            style={{
              flex: 1,
              resizeMode: "cover",
              maxWidth: post.postType === "comparacao" ? "50%" : "100%",
            }}
          />
          {post.postType === "comparacao" && (
            <Image
              source={{ uri: post.new_photo }}
              style={{ flex: 1, resizeMode: "cover", maxWidth: "50%" }}
            />
          )}
        </HStack>
      </Skeleton>
      <Divider my={1} />
      <HStack alignItems="center" px={4}>
        <Skeleton
          isLoaded={isLoaded}
          rounded="full"
          startColor="coolGray.100"
          endColor="coolGray.300"
          w={isScreen ? "full" : "2/4"}
        >
          <Pressable
            w={isScreen ? "full" : "2/4"}
            borderRightWidth={isScreen ? 0 : 1}
            borderRightColor="#E5E7EB"
            _pressed={{ opacity: 20 }}
          >
            <HStack justifyContent="center" alignItems="center" space="2">
              <SaveOutline />
              <Text>Guardar</Text>
            </HStack>
          </Pressable>
        </Skeleton>
        <Skeleton
          isLoaded={isLoaded}
          rounded="full"
          startColor="coolGray.100"
          endColor="coolGray.300"
          w={isScreen ? "0" : "2/4"}
        >
          <Pressable
            w="2/4"
            _pressed={{ opacity: 20 }}
            onPress={() => {
              dispatch(toggleShowCommentsModal());
            }}
          >
            <HStack justifyContent="center" alignItems="center" space="2">
              <CommentOutline />
              <Text>Comentários</Text>
            </HStack>
          </Pressable>
        </Skeleton>
      </HStack>
      <CommentsModal />
    </VStack>
  );
}
