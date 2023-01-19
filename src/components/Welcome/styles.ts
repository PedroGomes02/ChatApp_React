import styled from "styled-components";

const WelcomeContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: pink;
  padding: 1rem;
  color: purple;

  button {
    cursor: pointer;
  }
`;

export { WelcomeContainer };
