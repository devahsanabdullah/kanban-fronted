import "src/styles/globals.css";
import type { AppProps } from "next/app";
import HeaderLogo from '../components/HeaderLogo/index'
import Header from '../components/Header/index'
import {wrapper} from '../services/store/store'
function MyApp({ Component, pageProps }: AppProps) {
  return  (
  <>
  <div className="flex w-full">
    <div className="w-1/4">
    <HeaderLogo />
    </div>
    <div className="w-full">
    <Header />
    </div>
  </div>
  <Component {...pageProps} />
  </>);
}

export default wrapper.withRedux(MyApp);
