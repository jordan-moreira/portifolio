import styled from "styled-components";

const SobreMimContainer = styled.div`
  h1 {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 4.3vw;
    line-height: 100%;
    margin: 0 0 0 14.6vw;
  }
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 350;
    font-size: 2.5vw;
    line-height: 100%;
    width: 44.2vw;
    margin: 2.1vw 0 0 20.2vw;
  }
`;

function SobreMim() {
  return (
    <SobreMimContainer id="sobre-mim">
      <h1>Sobre mim</h1>
      <p>
        Trabalho como dev Fron-end a pouco tempo, me aperfeiçoando em react e
        estudando as tecnologias envolvidas no Back-end.
      </p>
    </SobreMimContainer>
  );
}

export default SobreMim;
