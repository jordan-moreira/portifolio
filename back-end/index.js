const axios = require("axios");

let Links = 0;
async function getLinks(url) {
  try {
    const response = await axios.get(url);
    const links = response.data
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
    console.log(links);
    return links;
  } catch (error) {
    console.error(error);
  }
}

getLinks("https://api.github.com/users/jordan-moreira/repos");
console.log(Links);
