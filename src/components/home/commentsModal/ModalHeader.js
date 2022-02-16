import { VStack, HStack, Box, Text, Pressable, Divider } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { toggleShowCommentsModal } from "../../../features/HomeSlice";

export default function ModalHeader() {
  const dispatch = useDispatch();
  return (
    <VStack space={2}>
      <Box w={12} h={1.5} rounded="md" bg="#e6e6e6" alignSelf="center" mt={2} />
      <HStack px={4} justifyContent="space-between" alignItems="center">
        <Text fontFamily="Poppins_500Medium" fontSize="lg">
          Comentários
        </Text>
        <Pressable
          bg="#f6f6f6"
          rounded="full"
          p={1.5}
          onPress={() => {
            dispatch(toggleShowCommentsModal());
          }}
        >
          <AntDesign name="close" size={24} />
        </Pressable>
      </HStack>
      <Divider />
    </VStack>
  );
}
