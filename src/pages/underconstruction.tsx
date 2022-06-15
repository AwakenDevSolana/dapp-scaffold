import type { NextPage } from "next";
import Head from "next/head";
import { UnderConstructionView } from "../views";

const Underconstruction: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>Coming Soon!</title>
        <meta
          name="United Galactic Confederation"
                  content="!"
        />
      </Head>
      <UnderConstructionView />
    </div>
  );
};

export default Underconstruction;
