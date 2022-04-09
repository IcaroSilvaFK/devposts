import Link from "next/link";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";

import { useModa } from "../../../context/modalContext";

import { Container, Box, Close } from "./styles";

export const MenuMobile: FC<{ active: boolean; closeMenu: () => void }> = ({
  active,
  closeMenu,
}) => {
  const { handleOpenModal } = useModa();

  const toogleModal = () => {
    handleOpenModal();
    closeMenu();
  };

  return (
    <Container display={active} onClick={closeMenu}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Close onClick={closeMenu}>
          <IoMdClose color='#fff' size={20} />
        </Close>
        <li>
          <Link href='/'>
            <a>Tweets</a>
          </Link>
        </li>
        <li onClick={toogleModal}>
          <button>Buscar</button>
        </li>
      </Box>
    </Container>
  );
};
