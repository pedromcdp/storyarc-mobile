import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text } from "native-base";

export function Policy() {
  return (
    <ScrollView flex={1} bg="white" px={4}>
      <StatusBar style={Platform.OS === "ios" && "light"} />
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} pb={2}>
        Política de Privacidade
      </Text>
      <Text fontFamily="Poppins_400Regular">
        Storyarc construiu a aplicação storyarc como uma aplicação gratuita.
        Este SERVIÇO é fornecido pelo storyarc sem custos e destina-se a ser
        utilizado como está. Esta página é utilizada para informar os visitantes
        sobre as nossas políticas com a recolha, utilização e divulgação de
        Informações Pessoais se alguém decidir utilizar o nosso Serviço. Se
        optar por utilizar o nosso Serviço, então concorda com a recolha e
        utilização de informações em relação a esta política. As Informações
        Pessoais que recolhemos são utilizadas para fornecer e melhorar o
        Serviço. Não usaremos nem partilharemos as suas informações com ninguém,
        exceto como descrito nesta Política de Privacidade. Os termos utilizados
        nesta Política de Privacidade têm os mesmos significados que nos nossos
        Termos e Condições, que são acessíveis no storyarc, salvo definição em
        contrário nesta Política de Privacidade.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Recolha e Utilização de Informação
      </Text>
      <Text fontFamily="Poppins_400Regular">
        Para uma melhor experiência, ao utilizar o nosso Serviço, podemos exigir
        que nos forneça determinadas informações pessoalmente identificáveis. As
        informações que solicitamos serão retidas por nós e utilizadas como
        descrito nesta política de privacidade. A aplicação utiliza serviços de
        terceiros que podem recolher informações usadas para o identificar.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Dados de Registo
      </Text>
      <Text fontFamily="Poppins_400Regular" pb={2}>
        Queremos informá-lo que sempre que utiliza o nosso Serviço, em caso de
        erro na app recolhemos dados e informações (através de produtos de
        terceiros) no seu telefone chamado Registo de Dados. Estes Dados de
        Registo podem incluir informações como o endereço do Protocolo de
        Internet do seu dispositivo ("IP"), nome do dispositivo, versão do
        sistema operativo, a configuração da aplicação ao utilizar o nosso
        Serviço, a hora e a data da sua utilização do Serviço, e outras
        estatísticas.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Cookies
      </Text>
      <Text fontFamily="Poppins_400Regular" py={2}>
        Os cookies são ficheiros com uma pequena quantidade de dados que são
        comumente usados como identificadores exclusivos anónimos. Estes são
        enviados para o seu navegador a partir dos websites que visita e são
        armazenados na memória interna do seu dispositivo. Este Serviço não
        utiliza explicitamente estes "cookies". No entanto, a aplicação pode
        usar códigos e bibliotecas de terceiros que usam "cookies" para recolher
        informações e melhorar os seus serviços. Tem a opção de aceitar ou
        recusar estes cookies e saber quando é enviado um cookie para o seu
        dispositivo. Se optar por recusar os nossos cookies, poderá não
        conseguir utilizar algumas partes deste Serviço.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Prestadores de Serviços
      </Text>
      <Text fontFamily="Poppins_400Regular" py={2}>
        Podemos empregar empresas e particulares de terceiros devido às
        seguintes razões: Para facilitar o nosso Serviço; Prestar o Serviço em
        nosso nome; Para a realização de serviços relacionados com o Serviço; ou
        Para nos ajudar a analisar como o nosso Serviço é utilizado. Queremos
        informar os utilizadores deste Serviço de que estes terceiros têm acesso
        às suas Informações Pessoais. A razão é executar as tarefas que lhes
        foram atribuídas em nosso nome. No entanto, são obrigados a não divulgar
        ou utilizar a informação para qualquer outro fim.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Segurança
      </Text>
      <Text fontFamily="Poppins_400Regular" py={2}>
        Valorizamos a sua confiança em fornecer-nos as suas Informações
        Pessoais, pelo que nos esforçamos por utilizar meios comercialmente
        aceitáveis para a proteger. Mas lembre-se que nenhum método de
        transmissão através da internet, ou método de armazenamento eletrónico é
        100% seguro e fiável, e não podemos garantir a sua segurança absoluta.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Links para outros sites
      </Text>
      <Text fontFamily="Poppins_400Regular" py={2}>
        Este Serviço pode conter ligações a outros sites. Se clicar num link de
        terceiros, será direcionado para esse site. Note que estes sites
        externos não são operados por nós. Por isso, aconselhamos vivamente a
        rever a Política de Privacidade destes websites. Não temos qualquer
        controlo e não assumimos qualquer responsabilidade pelo conteúdo,
        políticas de privacidade ou práticas de quaisquer sites ou serviços de
        terceiros.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Privacidade das Crianças
      </Text>
      <Text fontFamily="Poppins_400Regular" py={2}>
        Estes Serviços não se dirigem a menores de 13 anos. Não recolhemos
        informação pessoalmente identificável de crianças menores de 13 anos. No
        caso de descobrirmos que uma criança com menos de 13 anos nos forneceu
        informações pessoais, eliminamos imediatamente isso dos nossos
        servidores. Se é pai ou tutor e está ciente de que o seu filho nos
        forneceu informações pessoais, contacte-nos para que possamos fazer as
        ações necessárias.
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Alterações a Esta Política de Privacidade
      </Text>
      <Text fontFamily="Poppins_400Regular" py={2}>
        Podemos atualizar a nossa Política de Privacidade de vez em quando.
        Assim, é aconselhável rever esta página periodicamente para quaisquer
        alterações. Iremos notificá-lo de quaisquer alterações publicando a nova
        Política de Privacidade nesta página. Esta política é eficaz a partir de
        2022-01-18
      </Text>
      <Text fontFamily="Poppins_500Medium" bold fontSize={18} py={2}>
        Contact Us
      </Text>
      <Text fontFamily="Poppins_400Regular" pt={2} pb={40}>
        Se tiver alguma dúvida ou sugestão sobre a nossa Política de
        Privacidade, não hesite em contactar-nos support@storyarc.com.
      </Text>
    </ScrollView>
  );
}
