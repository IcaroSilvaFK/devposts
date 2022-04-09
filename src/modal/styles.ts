import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  padding-top: 100px;
  form {
    background-color: #fff;
    height: 40px;
    width: 450px;

    display: flex;

    border-radius: 10px;
    box-shadow: 0 0 20px #a0aec0;

    input {
      background-color: transparent;
      width: 100%;

      font-size: 18px;

      padding: 20px;
      color: #a0aec0;
      &::placeholder {
        color: #a0aec0;
      }
    }
    button {
      padding: 10px;
      background-color: transparent;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 500px) {
    form {
      width: 300px;
    }
  }
`;
