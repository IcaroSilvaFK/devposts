import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --fontMont: 'Montserrat', sans-serif;
    --fontPoppins: 'Poppins', sans-serif;

    /* cyan */
    --cyan100:#C4F1F9;
    --cyan200:#9DECF9;
    --cyan300:#76E4F7;
    --cyan-400:#0BC5EA;

    /* gray */
    --gray400:#A0AEC0;
    --gray500:#718096;
    --gray600:#4A5568;
    --gray700:#2D3748;
    --gray800:#1A202C;

    /* green */
    --green300:#68D391;
    --green400:#48BB78;
    --green500:#38A169;

  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,#__next{
    width: 100%;
    height: 100%;
    font-family: var(--fontPoppins);
    background-color:#F2F6FC;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
      background-color:transparent;
      width: 10px;
    }
    &::-webkit-scrollbar-thumb{
      background-color:#718096;

      border-radius: 20px;
    }
  }

  button,input{
    border: none;
    outline: none
  }

  button{
    cursor: pointer
  }

  ul,ol{
    list-style:none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

`;
