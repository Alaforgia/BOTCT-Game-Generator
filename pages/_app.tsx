import "../styles/globals.css";
// import {} from "styled-components/cssprop";
import type { AppProps } from "next/app";
import { StoreContextProvider } from "../src/context/store";

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  )
}

export default MyApp;
