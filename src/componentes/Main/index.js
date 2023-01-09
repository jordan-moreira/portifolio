import ilustracao from "../../imagens/ilustracao.svg";

function Main() {
  return (
    <div>
      <div className="inicio">
        <h1>Jordan Moreira</h1>
        <h2>Dev Front-end</h2>
        <p>
          Desenvolvedor web, conheço um pouco de web desing. Crio sites
          personalizados para ajudar as pessoas à divulgarem seus trabalhos.
        </p>
        <img src={ilustracao} alt="ilustracao" />
      </div>
      <div className="projetos"></div>
      <h1>Projetos</h1>
      <div className="cards-container"></div>
      <div className="sobre-mim"></div>
    </div>
  );
}

export default Main;
