import { ZStack, VStack, Skeleton, Box } from "native-base";

export function LoadingHighlight({ index }) {
  return (
    <ZStack
      width={140}
      height={200}
      rounded="lg"
      shadow="1"
      ml={index === 0 ? 4 : null}
      mr={2.5}
    >
      <Skeleton
        borderRadius={10}
        startColor="coolGray.100"
        endColor="coolGray.300"
        width="full"
        height={"full"}
      />
      <VStack
        justifyContent="space-between"
        px={2}
        w="full"
        h="full"
        space={1}
        pt={2}
        pb={1}
      >
        <Skeleton
          borderWidth={1.2}
          borderColor="white"
          startColor="coolGray.100"
          endColor="coolGray.300"
          size="8"
          rounded="full"
        />
        <Box>
          {index === 0 && (
            <Skeleton.Text
              lines={1}
              lineHeight={1}
              startColor="coolGray.100"
              endColor="coolGray.300"
              pb={2}
              w="2/5"
            />
          )}
          <Skeleton.Text
            lines={2}
            startColor="coolGray.100"
            endColor="coolGray.300"
            pb={1}
          />
        </Box>
      </VStack>
    </ZStack>
  );
}
