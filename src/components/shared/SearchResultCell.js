//Packages Imports
import { Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

export function SearchResultCell({ location }) {
  const navigation = useNavigation();

  return (
    <Pressable
      bg="white"
      borderBottomWidth={1}
      borderTopWidth={1}
      borderColor="#E2E2E2"
      _pressed={{ bg: "coolGray.100" }}
      onPress={() => navigation.navigate("SearchResults", { title: location })}
    >
      <Text
        py={6}
        px={4}
        fontFamily="Poppins_500Medium"
        color="black"
        fontSize={14}
      >
        {location}
      </Text>
    </Pressable>
  );
}
