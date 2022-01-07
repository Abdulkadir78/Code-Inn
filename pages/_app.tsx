import type { AppProps } from "next/app";

import Meta from "../components/UI/Meta";
import useLoader from "../hooks/useLoader";
import Spinner from "../components/UI/Spinner";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useLoader();

  return (
    <>
      <Meta />
      {loading ? <Spinner /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
