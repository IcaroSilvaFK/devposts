import type { AppProps } from "next/app";

import { ModalContextProvider } from "../context/modalContext";
import { SearchModal } from "../modal/serarchModal";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <SearchModal />
      </ModalContextProvider>
    </>
  );
}

export default MyApp;
