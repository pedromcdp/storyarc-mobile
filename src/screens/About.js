import { ScrollView } from "native-base";
import AboutRow from "../components/profile/AboutRow";
import { version } from "../../package.json";

export default function About() {
  return (
    <ScrollView flex={1} bg="white">
      <AboutRow title="Versão" subtitle={version} />
      <AboutRow title="Termos e condições" hasChild={true} isPressable={true} />
      <AboutRow title="Informações legais" hasChild={true} isPressable={true} />
      <AboutRow
        title="storyarc.pt"
        hasChild={true}
        openWeb={true}
        isPressable={true}
      />
    </ScrollView>
  );
}
