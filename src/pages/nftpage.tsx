import type { NextPage } from "next";
import Head from "next/head";
import { NftView } from "../views";

const nftpage: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>Academy Pass! Coming Soon!</title>
        <meta
          name="United Galactic Confederation Non-Fungible Tokens"
                  content="!"
        />
      </Head>
      <NftView />
    </div>
  );
};

export default nftpage;
