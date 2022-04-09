import styled from "styled-components";
import { SiWebtoon } from "react-icons/si";

export const Container = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  padding: 20px 40px;

  .container__title {
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      h1 {
        font-weight: 400;
        font-size: 25px;
      }
    }
  }

  border-bottom: 1px solid var(--cyan-400);
`;

export const LogoIcon = styled(SiWebtoon)`
  width: 40px;
  height: 40px;

  color: var(--cyan-400);
`;
