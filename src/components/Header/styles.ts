import styled from "styled-components";
import { SiWebtoon } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";

export const Container = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  padding: 20px 40px;

  .container__title {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      h1 {
        font-weight: 400;
        font-size: 22px;
      }
    }
  }

  border-bottom: 1px solid var(--cyan-400);

  @media (max-width: 500px) {
    width: 100%;
    padding: 10px;
    flex-direction: row;
  }
`;

export const LogoIcon = styled(SiWebtoon)`
  width: 40px;
  height: 40px;

  color: var(--cyan-400);
`;

export const MenuDesktop = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ResponsiveMenu = styled(AiOutlineMenu)`
  display: none;

  @media (max-width: 500px) {
    display: block;

    width: 30px;
    height: 30px;
  }
`;
