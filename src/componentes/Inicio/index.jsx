import ilustracao from "../../imagens/ilustracao.svg";
import styled from "styled-components";

const InicioContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .text {
    width: 35vw;
    margin: 6vw 0 0 6.8vw;
  }
  .titulo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    padding-right: 2.3vw;
  }
  .titulo h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 4.3vw;
    line-height: 100%;
  }
  .titulo h2 {
    margin: 0.5vw 0 0 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 200;
    font-size: 1.8vw;
    line-height: 100%;
  }
  .text p {
    margin: 4.4vw 0 0 1.9vw;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 300;
    font-size: 2vw;
    line-height: 100%;
  }
  img {
    width: 34vw;
    margin: 3.4vw 11.7vw 0 0;
  }
`;
function Inicio() {
  return (
    <InicioContainer id="inicio">
      <div className="text">
        <div className="titulo">
          <h1>Jordan Moreira</h1>
          <h2>Dev Front-end</h2>
        </div>
        <p>
          Desenvolvedor web, conheço um pouco de web desing. Crio sites
          personalizados para ajudar as pessoas à divulgarem seus trabalhos.
        </p>
      </div>
      <img src={ilustracao} alt="ilustracao" />
    </InicioContainer>
  );
}

export default Inicio;
