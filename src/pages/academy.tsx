import type { NextPage } from "next";
import Head from "next/head";
import { AcademyView } from "../views";

const Academy: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>UGC Academy</title>
        <meta
                  name="UGC ACADEMY"
          content="The United Galactic Confederation Acadamy of Knowledge And Technology"
        />
      </Head>
      <AcademyView />
    </div>
  );
};

export default Academy;
