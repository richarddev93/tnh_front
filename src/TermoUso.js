import React from 'react';
import { 
  StyleSheet, Text, View ,ScrollView,BackHandler
} from 'react-native';

export default class TermoUso extends React.Component {

    static navigationOptions = {
        title: 'Termos de Uso',
        headerStyle: {
            backgroundColor: global.headerColor,
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress = () => { 
        this.props.navigation.goBack();
        return true;
    }
    
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    render() {
        return (
            <ScrollView style={{flex:1}} >
                <View style={estiloTermoUso.form}>
                    <Text>
TERMOS E CONDIÇÕES DE USO {"\n"}
DO SITE VOZ VIVA E APLICATIVO VOZ VIVA {"\n"}
{"\n"}
{"\n"}
1.	Este contrato descreve os termos e condições gerais aplicáveis ao uso dos serviços oferecidos pelo aplicativo e pelo site Voz Viva. {"\n"}
1.1.	É necessário a leitura atenta do contrato antes da utilização dos serviços. Ao utilizar tanto o site quanto o aplicativo Voz Viva, o usuário aceita os termos e condições deste acordo. Caso o usuário não aceite os termos e condições deste acordo, não terá o direito de utilizar o site nem o aplicativo Voz Viva, nem seus serviços. A aceitação está condicionada expressamente à manifestação do usuário de todos os termos e condições deste contrato, incluindo a política de privacidade. {"\n"}
1.2.	Qualquer pessoa (denominada “Usuário”) que deseje aceitar/utilizar o site e o aplicativo Voz Viva, poderá fazê-lo sujeitando-se aos termos e condições gerais respectivos, junto com as demais políticas e princípios que regem o site e aplicativo Voz Viva. Qualquer Usuário que não aceite esses termos e condições gerais, os quais tem caráter obrigatório e vinculante, deverá abster-se de utilizar o site e o aplicativo Voz Viva e/ou seus serviços. {"\n"}
{"\n"}
2.	Capacidade {"\n"}
2.1.	Os serviços no site e no aplicativo Voz Viva estão disponíveis para pessoas que tenham capacidade legal para contratar e trabalhar. Não poderão utilizar os serviços do site e do aplicativo Voz Viva pessoas que não tem essa capacidade, além dos menores de idade, Usuários que foram desabilitados definitivamente ou suspensos temporariamente. Caso um Usuário esteja cadastrado como Empresa, ele terá capacidade de contratar em nome de tal entidade e essa deverá também respeitar os termos e as condições gerais de uso. {"\n"}
{"\n"}
3.	Registro {"\n"}
3.1.	É necessário e obrigatório completar o formulário de registro em todos os seus campos com dados válidos para poder utilizar o site e o aplicativo Voz Viva. O futuro Usuário deverá completá-lo de maneira exata, precisa e verdadeira suas informações pessoais e assume o compromisso de atualizar os dados pessoais quando se faça necessário. O site e o aplicativo Voz Viva poderão utilizar-se de vários meios para identificar seus Usuários. {"\n"}
3.2.	Os Usuários respondem em qualquer caso pela veracidade e exatidão dos dados pessoais aí dispostos. {"\n"}
3.3.	O site e o aplicativo Voz Viva reservam o direito de solicitar algum comprovante e/ou dados adicionais a efeito de corroborar com o registro de dados pessoais, assim como suspender definitiva ou temporariamente os Usuários cuja verificação de dados não foi possível. Nesses casos, se dará baixa em todos os trabalhos e/ou pedidos publicados, sem que isso gere direito de ressarcimento. {"\n"}
3.4.	O Usuário terá acesso à sua conta pessoal mediante preenchimento do endereço do correio eletrônico vinculado à sua conta e a senha pessoal elegida. {"\n"}
3.5.	O Usuário é obrigado a manter a confidencialidade da própria senha. {"\n"}
3.6.	A conta é única, pessoal e intransferível. Ficando assim, proibido que o mesmo Usuário registre ou possua mais de uma conta. Caso o site e o aplicativo Voz Viva detectem contas distintas que contenham dados coincidentes ou relacionados, poderá cancelá-las, suspendê-las ou desabilitá-las. {"\n"}
3.7.	O Usuário fica responsável por todas as operações feitas em sua conta, pois o acesso está restrito ao acesso com sua senha, de seu conhecimento exclusivo, devendo o Usuário informar imediatamente, através de meio idôneo, qualquer uso não autorizado de sua conta, assim como o acesso desta conta por meio de terceiros, não autorizados pelo Usuário. {"\n"}
3.8.	É proibido a venda, cessão ou transferência da conta (incluindo a qualificação e reputação). {"\n"}
3.9.	É reservado o direito de recusa de qualquer solicitação de registro ou cancelamento de registro, sem que seja obrigado a comunicação ou exposições de razões de suas decisões pelo site e pelo aplicativo Voz Viva. Isso não gera quaisquer tipos de indenização ou ressarcimento. {"\n"}
{"\n"}
4.	Alterações no Termo de Compromisso e Condições Gerais {"\n"}
4.1.	O site e o aplicativo Voz Viva poderão modificar o Termo de Compromisso e as Condições Gerais a qualquer momento e publicarão as alterações no site e no aplicativo Voz Viva. Todas as alterações entrarão em vigor 10 (dez) dias após sua publicação. Dentro dos 5 (cinco) dias seguintes a publicação das alterações, o Usuário deverá comunicar-se por e-mail caso não aceite algo das modificações introduzidas, e neste caso, será desfeito o vínculo contratual estabelecido e o Usuário será desabilitado, desde que não haja dívidas pendentes. Ao término deste prazo, será considerado aceito pelo Usuário os novos termos e o contrato permanecerá vinculando as partes. {"\n"}
{"\n"}
5.	Privacidade da Informação {"\n"}
5.1.	Para se utilizar os serviços do site e do aplicativo Voz Viva, o Usuário deve disponibilizar seus dados pessoais. Essa informação será processada e armazenada nos servidores que mantém alto nível de segurança e proteção. Para maiores informações sobre a privacidade dos dados pessoais e sobre os casos em que ela poderá ser revelada, deve-se consultar a política de privacidade. {"\n"}
5.2.	Termos de Cookies – Categorias: {"\n"}
5.3.	Preferências – esses Cookies permitem que nosso site e aplicativo Voz Viva lembrem informações que mudam a forma como o site e aplicativo se comporta ou é exibido, como seu idioma preferido e geolocalização. A perda de informações armazenadas em Cookies de preferência, por tornar a experiência no site e no aplicativo menos funcional, não impede os mesmos de funcionarem. {"\n"}
5.4.	Segurança - os Cookies de segurança servem para autenticar Usuários, evitar utilização fraudulenta de credenciais de login e protege os dados de Usuário de terceiros não autorizados. {"\n"}
5.5.	Processos – Cookies de processos ajudam a fazer o site e aplicativo funcionar e fornecer serviços que o Usuário espera, como navegar em páginas da web ou aplicativo, bem como acessar áreas de segurança, sem esses cookies o site e o aplicativo Voz Viva podem não funcionar corretamente. {"\n"}
5.6.	Publicidade – Os cookies são usados para tornar a publicidade mais envolvente para os Usuários e mais valiosa para os anunciantes, gerando relatórios sobre o desempenho de campanhas evitando repetições. {"\n"}
{"\n"}
6.	Obrigações dos Usuários {"\n"}
6.1.	Obrigações do Usuário Profissional/Fornecedor {"\n"}
6.1.1.	O Usuário Profissional/Fornecedor deve ter capacidade legal para realizar o trabalho que oferece. {"\n"}
6.1.2.	Somente em casos excepcionais o Usuário Profissional/Fornecedor poderá desistir de prestar o serviço que ofertou. Tais como: quando não for possível entrar em acordo com o Usuário Comprador sobre a forma de pagamento, prazos de realização, ou quando não for possível verificar a verdadeira identidade ou demais informações do Usuário Comprador. {"\n"}
6.1.3.	O site e o aplicativo Voz Viva são um ponto de encontro entre o Usuário Comprador e o Usuário Vendedor e, diante disso, não participa das operações realizadas entre eles. O Usuário Profissional/Fornecedor será responsável por todas as cargas impositivas que correspondem a prestação dos seus serviços, sem que possa imputar ao site e aplicativo Voz Viva qualquer tipo de responsabilidade por descumprimento em tal sentido. {"\n"}
{"\n"}
7.	Proibições {"\n"}
7.1.	É vedado ao Usuário: {"\n"}
7.1.1.	Compartilhar informações de contato de um Profissional/Fornecedor que não tenha enviado um orçamento ou cotação para a solicitação de trabalho publicada; {"\n"}
7.1.2.	Dar a conhecer os seus dados pessoais; {"\n"}
7.1.3.	Publicar ou oferecer serviços proibidos pelo Termo e Condições Gerais, e demais políticas aplicadas pelo site e pelo aplicativo Voz Viva, além das leis vigentes no país; {"\n"}
7.1.4.	Insultar ou agredir outro Usuário; {"\n"}
7.1.5.	Utilizar de sua reputação, qualificações, comentários ou réplicas recebidas no site e no aplicativo Voz Viva em qualquer âmbito fora do site e do aplicativo Voz Viva. {"\n"}
7.2.	Se ocorrerem esses tipos de situações, haverá uma investigação por parte do site e do aplicativo Voz Viva e o infrator poderá ser sancionado com a suspensão ou o cancelamento de sua solicitação de oferta e inclusive à sua inscrição de Conta com Usuário, além de qualquer outra forma de sanção que seja pertinente, como ações judiciais penais que configurem o delito, ou danos cíveis que possa o infrator causar. {"\n"}
{"\n"}
8.	Violações do Sistema ou Base de Dados {"\n"}
8.1.	Não é permitida nenhuma ação ou uso de dispositivo, software, ou outro meio como o propósito de interferir nas atividades e operações do site e aplicativo Voz Viva, nas solicitações de ofertas, descrições, contas ou base de dados do site e do aplicativo Voz Viva. Qualquer intromissão, atividade ou tentativa de violação ou que seja contrária aos direitos de propriedade intelectual e/ou as proibições estipuladas neste acordo serão passíveis de ações legais pertinentes, e sanções previstas por este acordo, assim como fará o autor responsável pela indenização dos danos ocasionados. {"\n"}
{"\n"}
9.	Sanções e Suspensões de Operações {"\n"}
9.1.	Sem prejuízo de outras medidas, poderão o site e aplicativo Voz Viva advertir, suspender em caráter temporário ou desabilitar definitivamente a Conta de um Usuário ou uma publicação, além de poder aplicar sanção que impacte negativamente na reputação de um Usuário, iniciar ações que julgue pertinente e suspender a prestação de seus serviços caso: {"\n"}
9.1.1.	Inflija alguma lei ou norma estipulada no Termo e nas Condições Gerais e demais políticas do site e do aplicativo Voz Viva; {"\n"}
9.1.2.	Não se cumpra os compromissos como Usuário; {"\n"}
9.1.3.	O site e o aplicativo Voz Viva entendam que o usuário está cometendo atos dolosos ou fraudulentos; {"\n"}
9.1.4.	Não seja possível a verificação da identidade do Usuário ou qualquer de suas informações não seja correta; {"\n"}
9.1.5.	Se o site e o aplicativo Voz Viva entenderem que as publicações ou outras ações podem gerar prejuízo para o Usuário que as publicou, para o próprio site e aplicativo Voz Viva ou outros Usuários. No caso de um Usuário ser suspenso ou desabilitado, todas as suas solicitações e/ou ofertas que houver publicado serão removidas do sistema e em caso algum será devolvido ou bonificado os gastos de publicação envolvidos. {"\n"}
{"\n"}
10.	Responsabilidade {"\n"}
10.1.	O site e aplicativo Voz Viva somente disponibilizam espaço virtual e haverá comunicação somente através da Internet com seus Usuários. O site e o aplicativo Voz Viva não têm relação laboral vinculante com os profissionais que oferecem seus serviços no site e no aplicativo, portanto não intervém no aperfeiçoamento das operações realizadas entre os Usuários nem nas relações por eles estipuladas. Por isso, não serão responsáveis no que se refere à existência, qualidade, quantidade, estado, integridade e legitimidade dos serviços oferecidos, adquiridos ou outorgados aos Usuários. Assim como, da capacidade para contratar Usuários ou da veracidade de seus dados pessoais. Cada Usuário é responsável pelos serviços que publica e pelas ofertas e compras que realiza. {"\n"}
10.2.	Diante de não se intrometer em nenhum tipo de negociação, o site e o aplicativo não serão responsáveis pelo efetivo cumprimento das obrigações assumidas pelo Usuário ou no aperfeiçoamento das operações. O Usuário conhece e aceita que ao realizar operações com outros Usuários ou terceiros o faz mediante responsabilidade própria. Em nenhum caso o site e aplicativo Voz Viva será responsável pelos lucros cessantes, ou por qualquer outro dano e/ou prejuízo que possa ter sofrido o Usuário devido a operações realizadas ou não realizadas através do site e do aplicativo Voz Viva. {"\n"}
{"\n"}
11.	Alcance dos serviços do site e do aplicativo Voz Viva. {"\n"}
{"\n"}
{"\n"}
11.1.	Este acordo não cria nenhum contrato de sociedade, de mandato, de franquia ou de relação laboral entre o site e o aplicativo Voz Viva e o Usuário. É aceito pelo Usuário que o site e o aplicativo Voz Viva não são parte em nenhuma operação, nem têm controle sobre a qualidade, segurança ou legalidade dos serviços anunciados. A veracidade ou a exatidão dos anúncios, a capacidade dos Usuários para vender ou comprar serviços. Além disso, o site e o aplicativo Voz Viva não poderão assegurar que um Usuário completará uma operação, não poderá garantir a veracidade da publicidade de terceiros que apareça no site e no aplicativo e nem serão responsáveis pela correspondência ou contratos que o Usuário firme com terceiros ou com outros Usuários. {"\n"}
{"\n"}
12.	Falha no sistema {"\n"}
12.1.	O site e o aplicativo Voz Viva não se responsabilizam por qualquer dano, perda ou prejuízo causados aos Usuários por falha no sistema, no servidor ou na Internet. {"\n"}
12.2.	O site e o aplicativo Voz Viva tampouco serão responsáveis por qualquer vírus que possa infectar o equipamento do Usuário como consequência do acesso, uso ou exame do Site web ou a raiz de qualquer transferência de dados, arquivos, imagens, textos, ou áudio contidos no mesmo. O Usuário não poderá imputar responsabilidade e exigir pagamento de lucros cessantes, em virtude de prejuízos resultantes de dificuldades técnicas ou falhas no sistema ou Internet. O site e o aplicativo Voz Viva não garantem o acesso ao uso contínuo nem do seu site e nem do seu aplicativo, podendo o sistema estar em algum momento indisponível devido a dificuldades técnicas ou falhas da Internet, por qualquer circunstância alheia ao site e o aplicativo Voz Viva. Em quaisquer casos, buscará se reestabelecer com maior velocidade possível, sem que isso possa imputar como sua responsabilidade. O site e o aplicativo Voz Viva não será responsável por nenhum erro ou omissão contidos em seu site e aplicativo na web. {"\n"}
{"\n"}
13.	Tarifas e Faturamento {"\n"}
13.1.	O registro no site e no aplicativo Voz Viva para Usuário Comprador é gratuito. {"\n"}
13.2.	Para oferecer seus serviços o Usuário Vendedor deverá pagar uma Tarifa ao site e aplicativo Voz Viva, reservando-se o site e aplicativo Voz Viva o direito de outorgar créditos para cancelá-la de maneira total ou parcial. {"\n"}
13.3.	O site e o aplicativo Voz Viva se reservam ao direito de modificar, trocar, agregar, ou eliminar as Tarifas vigentes, em qualquer momento, o qual será notificado aos Usuários. Sem embargos, o site e o aplicativo Voz Viva poderão modificar temporariamente a política de tarifas e as tarifas pelos seus serviços por razão de promoções, sendo efetivas estas modificações quando se faça pública a promoção ou se realize o anúncio. {"\n"}
13.4.	O site e o aplicativo Voz Viva se reserva no direito de tomar medidas judiciais e extrajudiciais que estime pertinentes para obter o pagamento do montante devido. {"\n"}
{"\n"}
{"\n"}
14.	Sistema de Reputação {"\n"}
14.1.	Por ser difícil à verificação de dados do Usuário pelo site e aplicativo Voz Viva, e não se poder conformar a suposta identidade de cada computador e cada Usuário, o site e aplicativo Voz Viva conta com uma reputação do Usuário. Ela é atualizada regularmente com base de dados vinculados de suas atividades realizadas pelo site e pelo aplicativo Voz Viva. {"\n"}
14.2.	Esse sistema de reputação também contará com um espaço onde os Usuários poderão fazer comentários e réplicas às qualificações recebidas e acessar as mesmas. Tais comentários serão incluídos sob exclusiva responsabilidade dos Usuários que os emitem. {"\n"}
14.3.	Por serem feitas pelos Usuários, as qualificações e comentários são de suas responsabilidades, e, portanto, o site e o aplicativo Voz Viva não têm qualquer responsabilidade no que se refere a veracidade ou exatidão dos mesmos. O site e o aplicativo Voz Viva se mantém no direito eliminar comentários que sejam considerados inadequados ou ofensivos. O site e o aplicativo Voz Viva também podem excluir Usuários que sejam objeto de comentários negativos derivados de fontes distintas. {"\n"}
14.4.	Para se obter maiores informações sobre o sistema de qualificações, pode-se consultar nosso sistema de reputação. {"\n"}
{"\n"}
15.	Propriedade Intelectual e Links de outros sites na Web {"\n"}
15.1.	Os conteúdos das telas relativas aos serviços do site e do aplicativo Mãos à Obra, além de seus programas, bases de dados, redes, arquivos que permitam aos Usuários entrarem em suas Contas, são de propriedade do site e são aplicativo Voz Viva e estão protegidos pelas leis e tratados internacionais de direitos do autor, marcas, patentes, modelos e desenhos industriais, além das demais leis vigentes em nosso país. O suo indevido e a reprodução parcial ou total de tais conteúdos fica proibido, salvo por autorização expressa e por escrito do site e aplicativo Voz Viva. {"\n"}
15.2.	O site e o aplicativo Voz Viva podem conter links para outros sites na web, o que não indica que sejam propriedade ou operados pelo site e aplicativo Voz Viva. E por não deter esse controle, o site e aplicativo Voz Viva, não terão responsabilidade por seus conteúdos, materiais, ações e serviços por eles prestados, além de possíveis danos ou perdas ocasionadas pelos mesmos. O enlace a outros sites na web não implica em uma sociedade, relação, aprovação entre eles e o site e aplicativo Voz Viva. {"\n"}
{"\n"}
16.	Indenização {"\n"}
16.1.	O Usuário indenizará e manterá incólume o site e o aplicativo Voz Viva, suas filiais, empresas controladoras, diretores, administradores, representantes e empregados, por qualquer reclamação ou demanda de outros Usuários ou terceiros por suas atividades no site ou aplicativo ou por seu descumprimento dos Termos e Condições Gerais e demais políticas que estão incorporadas ao presente contrato, ou pela violação de qualquer lei ou direito de terceiros, incluindo encargos de advogados. {"\n"}
{"\n"}
17.	Jurisdição e Leis Aplicáveis {"\n"}
{"\n"}
17.1.	Este contrato está regido em todos os seus pontos pelas leis vigentes na República Federativa do Brasil. {"\n"}
17.2.	Para dirimir quaisquer controvérsias derivadas do presente acordo, sua existência, validade, interpretação, alcance e cumprimento, as partes elegem o Fórum da Comarca de São Paulo/SP com sendo o único competente para resolver os litígios ou demandas que venham a envolver as partes em relação ao uso e ao acesso do site e do aplicativo Voz Viva. {"\n"}
{"\n"}
18.	Domicílio {"\n"}
Se estabelece como endereço do site e do aplicativo Voz Viva na Rua Santa Cruz, 2105 - Conjunto 16001, Vila Mariana - CEP 04121-002, em São Paulo/SP, Brasil. {"\n"}
                    </Text>
                </View>
            </ScrollView>
        )
    }
};

estiloTermoUso = StyleSheet.create({
    form: {
        padding: 20,
        paddingBottom: 40,
        flex: 1,
        alignSelf: "stretch" ,
        backgroundColor: 'white',
    },
    formLabel: {
        color: '#006281',
        padding: 5,
        paddingBottom: 0,
        fontSize: 11,
    },
});