//Packages Imports
import { Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export function EmptyCommentList({ erro }) {
  return (
    <VStack space="3" pt={6} alignItems={"center"}>
      <MaterialIcons name="error-outline" size={32} color="black" />
      <Text fontSize="16" fontFamily="Poppins_500Medium">
        {erro}
      </Text>
    </VStack>
  );
}
