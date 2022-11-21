import "antd/dist/reset.css";
import Head from "next/head";
import { FC } from "react";

const App: FC = ({ Component }: any) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>twitter</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
