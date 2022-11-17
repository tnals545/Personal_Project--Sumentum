import type { AppProps } from "next/app";
import Title from "../components/Title";
import GlobalStyles from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Title title="Sumentum" />
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}
