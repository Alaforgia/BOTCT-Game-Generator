import "../styles/globals.css";
// import {} from "styled-components/cssprop";
import type { AppProps } from "next/app";
import { StoreContextProvider } from "../src/context/store";
// import { InputContextProvider, AddInputsContextProvider } from "./PlayerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <StoreContextProvider>
    // <AddInputsContextProvider>
     // {/* <InputContextProvider> */}
        <Component {...pageProps} />
     // {/* </InputContextProvider> */}
   // {/* </AddInputsContextProvider> */}
    //{/* </StoreContextProvider> */}
  );
}

export default MyApp;
