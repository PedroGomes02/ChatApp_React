import styled from "styled-components";

const NavBarContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: purple;
  padding: 1rem;
  color: white;

  button {
    padding: 0.5rem;
    border: pink;
    border-radius: 10px;
    background-color: white;
    color: violet;
    font-weight: bold;
    cursor: pointer;
  }
`;

export { NavBarContainer };
