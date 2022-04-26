import type { NextPage } from "next";
import Head from "next/head";
import Board from "../containers/Board";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tic-Tac-Toe</title>
        <meta
          name="Tic Tac Toe App"
          content="Created using Next and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board />
    </div>
  );
};

export default Home;
