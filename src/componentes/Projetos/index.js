import styled from "styled-components";
import Card from "../Card";

const ProjetosContainer = styled.div`
  text-align: center;

  h1 {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 4.3vw;
    line-height: 100%;
  }
  .cards-container {
    margin: 4.2vw 0 6.1vw;
    padding: 0 2.26vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
function Projetos() {
  return (
    <ProjetosContainer id="projetos">
      <h1>Projetos</h1>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ProjetosContainer>
  );
}

export default Projetos;
