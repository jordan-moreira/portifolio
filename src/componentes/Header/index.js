import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const HeaderContainer = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap");
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
  background-color: #020721;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo"></img>
      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#sobre-mim">Sobre mim</a>
        </li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
