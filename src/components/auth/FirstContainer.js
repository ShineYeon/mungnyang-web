import styled from "styled-components";

const Contatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  background-color: "red";
`;

function FirstContainer({ children }) {
  return <Contatiner>{children}</Contatiner>;
}
export default FirstContainer;
