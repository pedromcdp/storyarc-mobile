import { VStack } from "native-base";
import AboutRow from "../components/profile/AboutRow";

export default function About() {
  return (
    <VStack flex={1} bg="white">
      <AboutRow title="Versão" subtitle="0.1_alpha" />
      <AboutRow title="Termos e condições" hasChild={true} />
      <AboutRow title="Informações legais" hasChild={true} />
      <AboutRow title="storyarc.pt" hasChild={true} openWeb={true} />
    </VStack>
  );
}
