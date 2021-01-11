import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Affiliated() {
  return (
    <div className="affiliatedPage">
      <Header />
      <main>
        <h1>COMO MONTAR UMA ASSOCIAÇÃO</h1>
        <Card cardStyle="black">
          <div className="container">
            <p>
              Para fundar uma associação é necessário contar com 20 pessoas
              maiores de 21 anos para assinar a ata de fundação. Pela atual
              Legislação em vigor são precisos contar pelo menos com um
              presidente, vice-presidente, secretário e tesoureiro, sendo os
              demais cargos são facultativos. Os passos para fundar uma
              associação são:
            </p>
            <ol>
              <li>
                Contactar pelo menos 20 pessoas para assinar a ata de fundação:
                caso não existam tanto skatistas neste perfil, solicite aos seus
                parentes e amigos;
              </li>
              <li>A ata pode ser feita digitalmente;</li>
              <li>
                Elaborar um estatuto (ModeloAqui) de acordo com o novo Código
                Civil;
              </li>
              <li>
                Convocar uma assembléia de fundação através de um veículo de
                comunicação como site, blog, jornais ou mesmo pelas redes
                sociais;
              </li>
              <li>Imprimir 03 vias desta convocação;</li>
              <li>
                Convidar um advogado para estar presente nesta assembléia para
                orientá-los;
              </li>
              <li>
                Realizar esta assembléia com presenças das 20 pessoas, registrar
                os temas abordados e as decisões tomadas na ata, fazer todos os
                presentes maiores de 21 anos assinarem com CPF, RG e endereço
                completo com CEP e Bairro de cada um, inclusive do advogado;
              </li>
              <li>fotocopiar 02 vias da ata de fundação;</li>
              <li>
                registrar a ata e o estatuto, junto com a lista de presença num
                cartório de títulos e documentos que pode ser pelo{" "}
                <a
                  href="https://www.rtdbrasil.org.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.rtdbrasil.org.br/
                </a>
                ;
              </li>
            </ol>
            <p>
              Seguindo estes passos sua associação estará legalizada e apta a
              receber os benefícios municipais e estaduais que a Legislação
              permite (bolsas-atleta, leis de incentivo ao esporte,
              estabelecimento de convênio, etc.). Depois filiar-se a Federação
              Cearense de SkateBoard por meio de solicitação. Mas não esqueçam
              que o mais importante é que tenham pessoas dispostas a trabalhar
              pela associação.
            </p>
          </div>
        </Card>
        <Card cardStyle="gray">
          <div className="container">
            <h2>SEJA UMA FILIADA</h2>
            <p>
              Para Se tornar uma associação Filiada a Federação e ter todos os
              benefícios e direitos junto a federação, inclusive direito a voto
              e ações, basta enviar a sua documentação para o email da
              Federação.
            </p>
            <p>
              No email deve vir anexo o Estatuto da associação, a ultima ata de
              eleição da diretoria, a ultima ata de prestação de contas, o
              cartão CNPJ e a certidão negativa de débitos Federais.
            </p>
            <p>
              Não esqueça de que no objeto social da associação deve constar o
              SkateBoard e o estatuto ja deve estar de acordo com o novo código
              Civil.
            </p>
            <p>
              Após a solicitação por email, o nosso conselho irá avaliar a
              associação quanto ás diretrizes da Federação e emitirá um parecer
              de filiação, podendo ser favorável ou não.
            </p>
            <p>
              Se o parecer for favorável será marcada a data da Assembléia para
              que seja votada a entrada da associação bem como dos seus
              representantes.
            </p>
            <p>
              Faça parte da federação, seus associados só tem a ganhar com mais
              representatividade e tambem apoio junto aos entes públicos e
              privados.
            </p>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
