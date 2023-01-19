import styled from "styled-components";

const SendMessageContainer = styled.form`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: pink;
  color: purple;

  input {
    border-radius: 10px;
    padding: 0.5rem;
  }

  button {
    background-color: white;
    padding: 0.5rem;
    border: pink;
    border-radius: 10px;
    color: violet;
    font-weight: bold;
    cursor: pointer;
  }
`;

export { SendMessageContainer };
