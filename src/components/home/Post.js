import {
  Box,
  Text,
  VStack,
  HStack,
  Avatar,
  Skeleton,
  Divider,
  Image,
  Pressable,
} from "native-base";
import SaveFilled from "./../../../assets/images/saveFilled.svg";
import SaveOutline from "./../../../assets/images/saveOutline.svg";
import CommentOutline from "./../../../assets/images/CommentOutline.svg";
import Modal from "react-native-modal";
import { View } from "react-native";
import { useState } from "react";

export default function Post({ isLoaded, isScreen }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <VStack bg="white" shadow="1" mt="4" py={2} space={2}>
      <HStack px={4} space={2}>
        <Skeleton
          size="10"
          rounded="full"
          isLoaded={isLoaded}
          startColor="coolGray.100"
          endColor="coolGray.300"
          borderWidth="1"
          borderColor="#37B780"
        >
          <Avatar size="10" borderWidth="1" borderColor="#37B780" />
        </Skeleton>
        <VStack w="full">
          <Skeleton.Text
            isLoaded={isLoaded}
            lines={2}
            w="2/4"
            startColor="coolGray.100"
            endColor="coolGray.300"
          >
            <Text fontFamily="Poppins_500Medium">username</Text>
            <Text fontFamily="Poppins_400Regular" sub>
              Publicado há x anos
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
        <Text px={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus
          mi, molestie at nisl id, feugiat finibus justo. Phasellus venenatis
          nibh et dui tristique iaculis.
        </Text>
        <Image alt="to be defined" />
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
            onPress={() => setIsVisible(true)}
          >
            <HStack justifyContent="center" alignItems="center" space="2">
              <CommentOutline />
              <Text>Comentários</Text>
            </HStack>
          </Pressable>
        </Skeleton>
      </HStack>
      <Modal
        isVisible={isVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
        onSwipeComplete={() => setIsVisible(false)}
        swipeDirection={["up", "left", "right", "down"]}
        onBackdropPress={() => setIsVisible(false)}
        backdropOpacity={0.8}
      >
        <Box
          style={{
            backgroundColor: "white",
            height: "80%",
            width: "100%",
          }}
        >
          <Text>I am the modal content!</Text>
        </Box>
      </Modal>
    </VStack>
  );
}
