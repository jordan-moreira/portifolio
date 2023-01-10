import Inicio from "../Inicio";
import Projetos from "../Projetos";
import SobreMim from "../Sobre-mim";
import styled from "styled-components";

const MainContainer = styled.main``;
function Main() {
  return (
    <MainContainer>
      <Inicio />
      <Projetos />
      <SobreMim />
    </MainContainer>
  );
}

export default Main;
