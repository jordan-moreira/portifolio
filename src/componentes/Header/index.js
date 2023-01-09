import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const HeaderComponents = styled.header`
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
    <HeaderComponents>
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
    </HeaderComponents>
  );
}

export default Header;
