import styled from "styled-components";
import Card from "../Card";
const axios = require("axios");

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

let Links = 0;
async function getLinks(url) {
  try {
    const response = await axios.get(url);
    return response.data
      .map((repo) => {
        return {
          link: `https://jordan-moreira.github.io/${repo.name}/`,
          name: repo.name,
        };
      })
      .filter(
        (obj) =>
          !obj.link.match(/desafio-\d/g) && !obj.link.match(/portifolio/g)
      );
  } catch (error) {
    console.error(error);
  }
}
getLinks("https://api.github.com/users/jordan-moreira/repos");

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
