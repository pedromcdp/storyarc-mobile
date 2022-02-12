import { HStack, Box, Text } from "native-base";

import { useDispatch } from "react-redux";
import { toggleShowSearch } from "../../features/HomeSlice";

import Search from "../../../assets/images/search.svg";

export function HeaderSearch() {
  const dispatch = useDispatch();

  return (
    <Box px={4} pt={5} pb={2}>
      <HStack
        bg="#f6f6f6"
        borderRadius={20}
        h={12}
        px={5}
        alignItems="center"
        space={1.5}
        onStartShouldSetResponder={() => dispatch(toggleShowSearch())}
      >
        <Search width={20} height={20} style={{ color: "black" }} />
        <Text fontFamily="Poppins_400Regular" fontSize={12} color="#909090">
          Pesquise por locais
        </Text>
      </HStack>
    </Box>
  );
}
