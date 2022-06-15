import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>Galactic Confederation</title>
        <meta
          name="Staking UGC"
          content="2 Staking Mechanisms that guarantee passive income for short and long term profits!!"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
