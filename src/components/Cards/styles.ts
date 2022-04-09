import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-top: 20px;

  border-bottom: 1px solid var(--cyan-400);
  padding: 10px 0;

  max-width: 1200px;

  margin: auto;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .box__title {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      span {
        font-size: 12px;
      }
      strong {
        margin-right: 10px;
        font-size: 14px;
      }
    }
    .box__tags {
      display: flex;
      flex-direction: row;
      gap: 10px;
      color: #fff;
    }
  }
  .box__author {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;

    .author__content {
      font-size: 12px;

      span {
        color: var(--gray600);
      }
    }
  }
  .box__content {
    width: 500px;
    font-size: 25px;

    h3 {
      font-weight: 300;
    }
  }
  .box__description {
    width: 500px;
    color: var(--gray600);
  }
`;

export const Image = styled.div<{ backgroundImage: string }>`
  width: 580px;
  height: 100%;

  background-image: ${(props) => 'url("' + props.backgroundImage + '")'};

  background-position: right;
  background-size: cover;
`;

export const Tag = styled.div`
  font-size: 12px;
  background-color: var(--gray800);
  color: #fff;

  padding: 2px 6px;
  border-radius: 10px;
`;
