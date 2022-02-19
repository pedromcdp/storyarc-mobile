import { Pressable, Text } from "native-base";

export function SearchResultCell({ location }) {
  return (
    <Pressable
      bg="white"
      borderBottomWidth={1}
      borderTopWidth={1}
      borderColor="#E2E2E2"
      _pressed={{ bg: "coolGray.100" }}
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
