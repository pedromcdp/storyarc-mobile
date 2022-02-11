import { HStack, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ItemRow({ textContent, routeName }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(`${routeName}`)}>
      <HStack alignItems="center" justifyContent="space-between" gap={1}>
        <Text fontFamily="Poppins_400Regular" fontSize={18}>
          {textContent}
        </Text>
        <AntDesign name="right" size={24} color="black" />
      </HStack>
    </TouchableOpacity>
  );
}
