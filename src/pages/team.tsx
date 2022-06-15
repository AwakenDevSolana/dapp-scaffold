import type { NextPage } from "next";
import Head from "next/head";
import { TeamView } from "../views";

const Team: NextPage = (props) => {
  return (
    <div>
      <Head>
              <title>The UGC Team</title>
        <meta
                  name="UGC TEAM"
          content="Official Team Behind The United Galactic Confederation"
        />
      </Head>
      <TeamView />
    </div>
  );
};

export default Team;
