import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: #020721;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4vw;
  line-height: 100%;
  img {
    margin: 0 0 0 1.4vw;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
  }
  a {
    color: white;
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4vw;
    line-height: 100%;
  }
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
