import React, { FC, useState } from "react";
import Link from "next/link";

import { Navigation } from "../Navigation";
import { MenuMobile } from "../mobile/menu";

import { LogoIcon, Container, ResponsiveMenu, MenuDesktop } from "./styles";

export const Header: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenModal = () => {
    setIsActive(true);
  };
  const handleCloseModal = () => {
    setIsActive(false);
  };
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
      <MenuDesktop>
        <Navigation />
      </MenuDesktop>
      <ResponsiveMenu onClick={handleOpenModal} />
      <MenuMobile active={isActive} closeMenu={handleCloseModal} />
    </Container>
  );
};
