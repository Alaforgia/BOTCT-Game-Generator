import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import NumberRandomizer from "./NumberRandomizer";
// import { PlayerContext } from "../src/components/PlayerInputGenerator";

//@ts-ignore
export const PlayerContext: any = createContext();
const Home: NextPage = () => {
  const router = useRouter();
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState([]);
  // const [numOfPlayersInput, setNumOfPlayersInputs] = useState(0);
  // const numOfPlayersInput: any = useRef();
  const prevNumOfPlayers: any = useRef([]);
  //@ts-ignore
  // useEffect((): any => {
  //   prevNumOfPlayers.current = numOfPlayersInput;
  // }, [numOfPlayersInput]);

  useEffect((): any => {
    prevNumOfPlayers.current = numOfPlayers;
  }, [numOfPlayers]);
  //
  const onClickNumberOfPlayers = (e: any): any => {
    const numOfPlayers = e.target.value;

    setNumOfPlayers(numOfPlayers);
    if (numOfPlayers > 0) {
      const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
      setPlayers(generateInputs);
    } else {
      setPlayers([]);
    }
  };
  const addInputs = (): any => {
    return players.map((persons: any, index: any): any => (
      <input
        name="newInputs"
        key={index}
        type="text"
        // defaultValue={persons}
        // onChange={onClickNumberOfPlayers}
      ></input>
    ));
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    // @ts-ignore
    setNumOfPlayers(event.target.value);
    // @ts-ignore
    // onClickNumberOfPlayers();
    // @ts-ignore
    // updateInputs();
    // addInputs();
    console.log("you clicked Submit = ", event);
  };
  //

  const handleClick = (event: any) => {
    event.preventDefault();
    // @ts-ignore
    setNumOfPlayers(event.target.value);
    // updateInputs();
    // @ts-ignore
    // onClickNumberOfPlayers();
    router.push("/NumberRandomizer");
    console.log("you clicked handleClick = ", event.target.value);
    console.log("inputs on click is = ", inputs);
  };

  const updateInputs = () => {
    setPlayers((previousState) => {
      return { ...previousState };
    });
  };

  // @ts-ignore
  // console.log(" onClickNumberOfPlayers = ", onClickNumberOfPlayers());
  // @ts-ignore
  // console.log("numOfPLayers = ", numOfPlayers);
  // @ts-ignore
  // const inputs = updateInputs;
  // const inputs = addInputs();
  // console.log("updateInputs is =", updateInputs);
  // @ts-ignore
  const inputs = players.length ? <div>{addInputs(prevNumOfPlayers.current)}</div> : null;
  console.log("inputs is = ", inputs);
  // console.log("players is = ", players);

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              // defaultValue={numOfPlayers}
              // ref={numOfPlayersInput}
              value={numOfPlayers}
              // onChange={(e) =>
              //   //@ts-ignore
              //   setNumOfPlayers(e.target.value)
              // }
              onChange={onClickNumberOfPlayers}
            ></input>
          </form>
          <button type="submit" value={numOfPlayers} onClick={handleClick}>
            SUBMIT
          </button>

          {/* 
      //@ts-ignore */}
          <PlayerContext.Provider value={inputs}>
            {/* {players.length ? <div>{addInputs()}</div> : null} */}
            {/* 
      //@ts-ignore */}
            {/* <NumberRandomizer inputs={inputs} /> */}
            {/* {prevNumOfPlayers.current} */}

            <div>{inputs}</div>
            {/* 
      //@ts-ignore */}
          </PlayerContext.Provider>
        </main>
      </div>
    </>
  );
};

export default Home;
