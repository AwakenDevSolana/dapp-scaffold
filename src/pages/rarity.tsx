import type { NextPage } from "next";
import Head from "next/head";
import { RarityView } from "../views";

const Rarity: NextPage = (props) => {
  return (
      <div>



      <Head>
              <title>The United Galactic Confederation</title>
        <meta
          name="United Galactic Confederation"
                  content="Official Rarity for United Galactic Confederation!"
        />
          </Head>



      <RarityView />
    </div>
  );
};

export default Rarity;
