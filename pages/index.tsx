import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import NumberRandomizer from "./NumberRandomizer";
import GameSelection from "../src/components/GameSelection";
import clientPromise from "../server/mongodb";

const Home: NextPage = ({ games }: any) => {
  const router = useRouter();
  const prevNumOfPlayers: any = useRef([]);
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState(prevNumOfPlayers);

  // console.log("is this working?", );

  const PlayerCountInput = (props: any) => {
    return (
      <>
        <input ref={prevNumOfPlayers} value={props.value} type="text" name="players"></input>
      </>
    );
  };

  const addInputs = (): any => {
    const playerInputs = players.map((persons: any, index: any): any => (
      <PlayerCountInput name="newInputs" key={persons.toString()} id={persons.id} type="text" />
    ));

    return <div>{playerInputs}</div>;
  };

  const handleClick = () => {
    console.log(prevNumOfPlayers.current.value);
    const numOfPlayers = prevNumOfPlayers.current.value;
    console.log("START of setNumOfPlayers");

    setNumOfPlayers(numOfPlayers);
    if (numOfPlayers > 0) {
      const generateInputs: any = Array.from(Array(Number(numOfPlayers)).keys());
      setPlayers(generateInputs);
    } else {
      setPlayers([]);
    }
    console.log("END of setNumOfPlayers");
    // router.push("/NumberRandomizer");
  };

  // @ts-ignore
  const inputs = players.length ? <div>{addInputs(prevNumOfPlayers.current)}</div> : null;

  return (
    <>
      <div>
        <Head>
          <title>BOTCT Companion</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>
            Welcome to <a href="https://bloodontheclocktower.com/">Blood On The Clock Tower</a> Companion!
          </h1>
          <form>
            {/* <input
              type="text"
              // defaultValue={numOfPlayers}
              // ref={numOfPlayersInput}
              // value={numOfPlayers}
              // onChange={(e) =>
              //   //@ts-ignore
              //   setNumOfPlayers(e.target.value)
              // }
              // onChange={onClickNumberOfPlayers}
            ></input> */}
            <PlayerCountInput />
          </form>
          <button type="submit" value={numOfPlayers} onClick={handleClick}>
            Add Player
          </button>

          <div>{inputs}</div>
          {games.name}
          <ul>
            {games.map((game: any, index: any) => {
              return (
                <li key={index}>
                  <h3>{game.name}</h3>
                  {/* <h5>{game.classes}</h5> */}
                </li>
              );
            })}
          </ul>
        </main>
      </div>
      <ul>
        {games.map((game: any, index: any) => {
          return (
            <li key={index}>
              <h3>{game.name}</h3>
              {/* <h5>{game.classes}</h5> */}
            </li>
          );
        })}
      </ul>
      <GameSelection />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("game_data");

    const games = await db?.collection("game_types").find({}).sort({ name: 1 }).toArray();

    return {
      props: { games: JSON.parse(JSON.stringify(games)) },
    };
  } catch (e) {
    console.error(e);
  }
}
