import styled from "styled-components";

const MessageContainer = styled.form<{ selfMessage: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.selfMessage ? "right" : "left")};
  flex-direction: ${(props) => (props.selfMessage ? "row-reverse" : "row")};
  align-items: center;
  gap: 1rem;
  background-color: white;
  margin: 1rem;
  color: purple;

  img {
    width: 2rem;
  }
`;

export { MessageContainer };
