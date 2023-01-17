import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import styled from "styled-components";
import GlobalStyle from "./componentes/GlobalStyle";

const AppContainer = styled.div`
  background: linear-gradient(113.78deg, #11619b 7.3%, #080152 94.89%);
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
