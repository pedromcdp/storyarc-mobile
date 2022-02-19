//Packages Imports
import { HStack, Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
//svg's'
import Search from "../../../assets/images/search.svg";

export function HeaderSearch() {
  const navigation = useNavigation();

  return (
    <Box px={4} pt={5} pb={2}>
      <HStack
        bg="#f6f6f6"
        borderRadius="2xl"
        h={12}
        px={5}
        alignItems="center"
        space={1.5}
        onStartShouldSetResponder={() => navigation.navigate("Search")}
      >
        <Search width={20} height={20} style={{ color: "black" }} />
        <Text fontFamily="Poppins_400Regular" fontSize={12} color="#909090">
          Pesquise por locais
        </Text>
      </HStack>
    </Box>
  );
}
