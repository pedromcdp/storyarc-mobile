import { Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export function EmptyCommentList() {
  return (
    <VStack space="2" pt={10} justifyContent={"center"}>
      <MaterialIcons name="error-outline" size={24} color="black" />
      <Text>Sem Comentários</Text>
    </VStack>
  );
}
