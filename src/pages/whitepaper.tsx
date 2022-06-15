import type { NextPage } from "next";
import Head from "next/head";
import { WhitepaperView } from "../views";

const Whitepaper: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>Whitepaper</title>
        <meta
                  name="Official Whitepaper For The United Galactic Confederation"
          content="Official Whitepaper For The United Galactic Confederation"
        />
      </Head>
      <WhitepaperView />
    </div>
  );
};

export default Whitepaper;
