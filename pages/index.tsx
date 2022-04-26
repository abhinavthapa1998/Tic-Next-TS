import type { NextPage } from "next";
import Head from "next/head";
import Board from "../containers/Board";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Tic-Tac-Toe</title>
        <meta
          name="Tic Tac Toe App"
          content="Created using Next and Typescript"
        />
        <link rel="icon" href="/tic.ico" />
      </Head>

      <div className="stars"></div>
      <div className="clouds"></div>
      <div className="twinkling"></div>
      <Board />
    </div>
  );
};

export default Home;
