import "../styles/globals.css";
// import {} from "styled-components/cssprop";
import type { AppProps } from "next/app";
import { StoreContextProvider } from "../src/context/store";
import { InputContextProvider } from "./PlayerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <StoreContextProvider>
    <InputContextProvider>
      <Component {...pageProps} />
    </InputContextProvider>
    //{/* </StoreContextProvider> */}
  );
}

export default MyApp;
