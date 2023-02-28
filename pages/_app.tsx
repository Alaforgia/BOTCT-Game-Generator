import "../styles/globals.css";
// import {} from "styled-components/cssprop";
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return <Component {...pageProps} />;
}

export default MyApp;
