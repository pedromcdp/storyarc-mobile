import { ScrollView } from "native-base";
import AboutRow from "../components/profile/AboutRow";

export default function UserNotifications() {
  return (
    <ScrollView flex={1} bg="white">
      <AboutRow
        title="Lugares históricos próximos"
        subtitle="Será notificado quando estou perto de marcos históricos"
        isSwitchable={true}
      />
      <AboutRow
        title="Este dia na história"
        subtitle="Será notificado no dia de marcos históricos"
        isSwitchable={true}
      />
      <AboutRow
        title="Mais apreciados esta semana"
        subtitle="Será notificado com os melhores conteúdos colocados na plataforma durante a semana "
        isSwitchable={true}
      />
      <AboutRow
        title="Recriar fotos"
        subtitle="Será notificado para recriar fotos antigas baseado na sua localização atual"
        isSwitchable={true}
      />
    </ScrollView>
  );
}
