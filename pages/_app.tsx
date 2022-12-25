import type { AppProps } from "next/app";
import Title from "components/Title";
import GlobalStyles from "styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "redux/store";
import GetBackgroundImg from "components/GetBackgroundImg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <span>Sumentum</span>
      <GlobalStyles />
      <Provider store={store}>
        <GetBackgroundImg />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
