import Card from "../../components/Card";

import feskGroupImage from "../../assets/feskGroupImage.png";

import "./styles.css";

export default function Home() {
  return (
    <>
      <Card cardStyle="dark">
        <div className="container">
          <img src={feskGroupImage} alt="logo FESK" />
          <h1>A FESK</h1>
          <p className="description">
            A FESK - FEDERAÇÃO CEARENSE DE SKATEBOARD nasceu em 2001 com o
            propósito de incentivar a prática do esporte bem como representar o
            skateboard cearense para todo o Brasil e o mundo. Pessoas ilustres e
            queridas pelos skatistas já fizeram ou fazem parte desta federação
            como Charles Reginaldo e Alexandre dos Santos (GATO). Com o intuito
            de promover o esporte do Ceará é a federação quem representa os
            atletas amadores e profissionais, faz o ranking das categorias e
            fiscaliza a prática do esporte no estado. Ações junto aos governos
            Federais, Estaduais e municipais visando a defesa do esporte são o
            foco e desta federação. Trazer o bem estar para os praticantes do
            skateboard, dar mais visibilidade ao esporte e utilizar o esporte
            como ferramenta de inclusão são a missão
          </p>
        </div>
      </Card>
      <Card cardStyle="gray">
        <div className="container">
          <h1>SOBRE A NOSSA EQUIPE</h1>
          <p className="description">
            Todo mundo quer ser o nº 1, mas nós realmente somos! A nossa maneira
            e forma de compor a administração da entidade visa dar mais poder ao
            Skatista com as decisões sendo tomadas todas por um Conselho
            composto somente por skatistas. Como sabemos que isso importa?
            Porque somos o principal interessado que o esporte progrida! E se
            somos tão apaixonados pela garra, habilidade, paixão e desportivismo
            do nosso CONSELHO, nada mais importa (exceto, é claro, seu apoio).
            Confira os atletas profissionais do estado e tambem os amadores mais
            bem colocados no ranking pessoas que fazem por amor...
          </p>
        </div>
      </Card>
      <Card cardStyle="dark">
        <div className="container">
          <h1>Endereço</h1>
          <p className="description">
            Av. Alberto Craveiro, 2872 - Dias Macedo, Fortaleza - CE, 60861-770
          </p>
          <iframe
            title="adressMap"
            className="adressMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0263579585353!2d-38.52522248524089!3d-3.804378897232436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74fac135b9f6d%3A0x570de6521199847e!2sAv.%20Alberto%20Craveiro%2C%202872%20-%20Dias%20Macedo%2C%20Fortaleza%20-%20CE%2C%2060861-212!5e0!3m2!1spt-BR!2sbr!4v1609892107125!5m2!1spt-BR!2sbr"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </Card>
    </>
  );
}
