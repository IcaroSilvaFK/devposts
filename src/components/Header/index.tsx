import React, { FC } from "react";
import Link from "next/link";

import { Navigation } from "../Navigation";

import { LogoIcon, Container } from "./styles";

export const Header: FC = () => {
  return (
    <Container>
      <div className='container__title' title='Voltar a Home'>
        <Link href='/'>
          <a>
            <LogoIcon />
            <h1>WEB-DEVELOPER`S</h1>
          </a>
        </Link>
      </div>
      <Navigation />
    </Container>
  );
};
