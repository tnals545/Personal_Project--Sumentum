import type { AppProps } from "next/app";
import Title from "../components/Title";
import GlobalStyles from "../styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Title title="Sumentum" />
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
