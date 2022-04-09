import { FC } from "react";
import Link from "next/link";

import { Container } from "./styles";

export const Navigation: FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href='/'>
            <a>Tweets</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Search</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};
