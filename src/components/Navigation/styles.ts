import styled from "styled-components";

export const Container = styled.nav`
  ul {
    display: flex;
    align-items: center;
    li {
      a {
        display: flex;
        align-items: center;

        padding: 15px;
        font-size: 18px;

        &:hover {
          color: var(--cyan-400);
          transition: all 0.3s;
        }
      }
      button {
        padding: 10px;
        background-color: transparent;
      }
    }
  }
`;
