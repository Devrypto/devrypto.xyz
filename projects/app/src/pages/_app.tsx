import { DefaultLayout } from "@/components/Layout";
import "@/styles/global.css";
import { UsefulToast, Web3Provider } from "@inaridiy/useful-web3";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
function MyApp({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) {
  return (
    <Web3Provider>
      <DefaultLayout>
        <UsefulToast />
        <Component {...pageProps} />
      </DefaultLayout>
    </Web3Provider>
  );
}

export default MyApp;
