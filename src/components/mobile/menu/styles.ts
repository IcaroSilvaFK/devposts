import styled from "styled-components";

export const Container = styled.nav<{ display: boolean }>`
  display: ${(props) => (props.display ? "flex" : "none")};
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.2);

  justify-content: flex-end;
`;

export const Box = styled.ul`
  position: relative;

  background-color: #f2f6fc;

  width: 205px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 50px;

  li {
    font-size: 18px;

    button {
      font-size: 18px;
      background-color: transparent;
    }
  }
  li + li {
    margin-top: 20px;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: 10px;
  border-bottom-left-radius: 20px;

  background-color: #e53e3e;
`;
