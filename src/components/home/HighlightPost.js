//Packages Imports
import { useState } from "react";
import {
  Box,
  Text,
  Image,
  ZStack,
  VStack,
  Skeleton,
  Avatar,
} from "native-base";

export default function HighlightPost({ index, isLoaded }) {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);
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
        isLoaded={isLoaded}
        borderRadius={10}
        startColor="coolGray.100"
        endColor="coolGray.300"
        width="full"
        height={"full"}
      >
        <Image
          // source={{
          //   uri: "https://pbs.twimg.com/media/FLLvDlgWQAgXoqc?format=jpg&name=900x900",
          // }}
          source={require("../../../assets/images/profilebg.png")}
          reziseMode="cover"
          alt={"Demo"}
          width="full"
          height={"full"}
          rounded="lg"
        />
      </Skeleton>
      <Box
        width="full"
        height="full"
        rounded="lg"
        bg={{
          linearGradient: {
            colors: ["rgba(0,0,0,0.8)", "rgba(0,0,0,0.1)"],
            start: [0, 0],
            end: [0, 1],
            locations: [1, 0],
          },
        }}
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
          isLoaded={isLoaded}
          borderWidth={1.2}
          borderColor="white"
          startColor="coolGray.100"
          endColor="coolGray.300"
          size="8"
          rounded="full"
        >
          <Avatar
            size="sm"
            borderWidth={1.2}
            borderColor="white"
            source={require("../../../assets/images/user_img.png")}
          />
        </Skeleton>
        <Box>
          {index === 0 && (
            <Skeleton.Text
              lines={1}
              lineHeight={1}
              isLoaded={isLoaded}
              startColor="coolGray.100"
              endColor="coolGray.300"
              pb={2}
              w="2/5"
            >
              <Text
                fontFamily="Poppins_500Medium"
                color="white"
                fontSize="xs"
                pb={1}
              >
                Em destaque
              </Text>
            </Skeleton.Text>
          )}
          <Skeleton.Text
            lines={2}
            isLoaded={isLoaded}
            startColor="coolGray.100"
            endColor="coolGray.300"
            pb={1}
          >
            <Text
              numberOfLines={2}
              fontFamily="Poppins_500Medium"
              color="white"
              fontSize="md"
              lineHeight="sm"
            >
              Escola Secundária José Estevão
            </Text>
          </Skeleton.Text>
        </Box>
      </VStack>
    </ZStack>
  );
}
