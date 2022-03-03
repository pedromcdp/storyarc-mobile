import { VStack, HStack, Skeleton, Divider } from "native-base";

export function LoadingPost() {
  return (
    <VStack bg="white" shadow="1" mt={4} pb={2} space={2}>
      <HStack
        px={4}
        pt={2}
        w="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack space={"2"} flex="1" flexGrow="1">
          <Skeleton
            size="10"
            rounded="full"
            startColor="coolGray.100"
            endColor="coolGray.300"
            borderWidth="1"
            borderColor="#37B780"
          />
          <VStack flexGrow="1">
            <Skeleton.Text
              lines={2}
              w="3/4"
              startColor="coolGray.100"
              endColor="coolGray.300"
            />
          </VStack>
        </HStack>
      </HStack>
      <Skeleton
        w="94%"
        h="40"
        alignSelf="center"
        startColor="coolGray.100"
        endColor="coolGray.300"
      />
      <Divider my={1} />
      <HStack alignItems="center" px={4}>
        <Skeleton
          rounded="full"
          startColor="coolGray.100"
          endColor="coolGray.300"
          w={"2/4"}
        />
        <Skeleton
          rounded="full"
          startColor="coolGray.100"
          endColor="coolGray.300"
          w={"2/4"}
        />
      </HStack>
    </VStack>
  );
}
