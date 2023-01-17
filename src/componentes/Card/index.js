import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #0e1065;
  width: 19.3vw;
  height: 21.9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2.26vw 2.8vw;

  h2 {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 2.1vw;
    line-height: 100%;
  }
`;

function Card() {
  return (
    <CardContainer>
      <h2>projeto</h2>
    </CardContainer>
  );
}

export default Card;
