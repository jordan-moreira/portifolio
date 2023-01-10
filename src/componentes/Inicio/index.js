import ilustracao from "../../imagens/ilustracao.svg";
import styled from "styled-components";

const InicioContainer = styled.div``;
function Inicio() {
  return (
    <InicioContainer id="inicio">
      <h1>Jordan Moreira</h1>
      <h2>Dev Front-end</h2>
      <p>
        Desenvolvedor web, conheço um pouco de web desing. Crio sites
        personalizados para ajudar as pessoas à divulgarem seus trabalhos.
      </p>
      <img src={ilustracao} alt="ilustracao" />
    </InicioContainer>
  );
}

export default Inicio;
