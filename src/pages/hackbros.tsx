import type { NextPage } from "next";
import Head from "next/head";
import { HackView } from "../views";

const Hackbros: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>HackBros!</title>
        <meta
                  name="Hackbros"
          content="The Backbone of The United Galactic Confederation"
        />
      </Head>
      <HackView />
    </div>
  );
};

export default Hackbros;
