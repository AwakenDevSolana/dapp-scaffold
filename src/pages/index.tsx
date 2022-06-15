import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>The United Galactic Confederation</title>
        <meta
          name="United Galactic Confederation"
                  content="Official DAPP for the United Galactic Confederation!"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
