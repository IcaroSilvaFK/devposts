import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
  max-width: 350px;
  min-width: 350px;

  position: relative;

  color: var(--gray600);

  border-radius: 5px;
`;

export const Box = styled.div`
  flex-grow: 1;
  div {
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
      color: var(--gray600);
      padding: 5px 0;
      word-wrap: break-word;
    }
  }

  .box__profile {
    display: flex;
    align-items: center;
    div {
      img {
        border-radius: 50%;
        height: 40px;
      }
      display: flex;
      flex-direction: column;

      strong {
        font-size: 14px;
      }
      a {
        text-decoration: underline;
        font-size: 12px;

        transition: all 0.3s;

        &:hover {
          color: var(--gray400);
        }
      }
    }
    div + div {
      margin-left: 10px;
    }
  }
`;

export const BackgroundImage = styled.div<{ cover: string }>`
  background-image: ${(props) => 'url("' + props.cover + '")'};

  width: 100%;
  height: 150px;

  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

export const Dev = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  strong {
    font-size: 13px;
  }
  span {
    font-size: 12px;
  }
`;

export const Likeds = styled.div`
  position: absolute;
  bottom: 2px;
  right: 10px;

  color: #ff3636;
  display: flex;
  align-items: center;
`;
