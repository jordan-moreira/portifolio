import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap");
  width: 100v;
  background: linear-gradient(113.78deg, #11619b 7.3%, #080152 94.89%);
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
