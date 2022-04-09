import { FC } from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

import { useModa } from "../../context/modalContext";

import { Container } from "./styles";

export const Navigation: FC = () => {
  const { handleOpenModal } = useModa();

  return (
    <Container>
      <ul>
        <li>
          <Link href='/'>
            <a>Tweets</a>
          </Link>
        </li>
        <li>
          <button onClick={handleOpenModal}>
            <BsSearch size={20} color='#718096' />
          </button>
        </li>
      </ul>
    </Container>
  );
};
