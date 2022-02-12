import { useState } from "react";
import { HStack, VStack, Text, Pressable, Skeleton } from "native-base";

export default function HighlightContent({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);
  return (
    <VStack bg="white" pt={1} pb={4} pl={4} shadow="9">
      <HStack
        alignItems="center"
        pb={1.5}
        pr={4}
        justifyContent="space-between"
      >
        <Skeleton.Text
          lines={1}
          w="3/5"
          isLoaded={isLoaded}
          startColor="coolGray.100"
          endColor="coolGray.300"
        >
          <Text fontFamily="Poppins_500Medium" fontSize={20}>
            Conteúdos Certificados
          </Text>
        </Skeleton.Text>
        <Skeleton.Text
          lines={1}
          w="1/4"
          isLoaded={isLoaded}
          startColor="coolGray.100"
          endColor="coolGray.300"
        >
          <Pressable _pressed={{ opacity: 20 }}>
            <Text fontFamily="Poppins_400Regular" fontSize={11} color="#33B877">
              ver mais
            </Text>
          </Pressable>
        </Skeleton.Text>
      </HStack>
      {children}
    </VStack>
  );
}