import React from "react";
import { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NumberRandomizer from "../../pages/NumberRandomizer";

//@ts-ignore
export const PlayerContext: any = createContext();

function PlayerInputGenerator(): JSX.Element {
  //@ts-nocheck
  const router = useRouter();
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState([]);
  const player: any = [];
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
    return players.map((persons: any): any => (
      <input
        name="inputs"
        key={persons}
        type="text"
        // value={player}
        // onChange={onClickNumberOfPlayers}
      ></input>
    ));
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    // @ts-ignore
    onClickNumberOfPlayers();
    // addInputs();
    console.log("you clicked Submit", event);
  };
  //

  const handleClick = (event: any) => {
    event.preventDefault();
    // @ts-ignore
    // onClickNumberOfPlayers()
    router.push("/NumberRandomizer");
    console.log("you clicked handleClick", event);
    console.log("numOfPLayers = ", numOfPlayers);
  };
  // @ts-ignore
  // console.log(" onClickNumberOfPlayers = ", onClickNumberOfPlayers());
  // @ts-ignore
  // console.log("numOfPLayers = ", numOfPlayers);
  // @ts-ignore
  const inputs = players.length ? <div>{addInputs()}</div> : null;
  console.log("inputs is =", inputs);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // defaultValue={numOfPlayers}
          value={numOfPlayers}
          onChange={onClickNumberOfPlayers}
        ></input>
        <button type="submit" onClick={handleClick}>
          SUBMIT
        </button>
      </form>
      {/* <Link href="/NumberRandomizer"> */}
      {/* </Link> */}
      <form>
        {/* 
      //@ts-ignore */}
        <PlayerContext.Provider value={inputs}>
          {/* {players.length ? <div>{inputs}</div> : null} */}
          {/* 
      //@ts-ignore */}
          {/* <h3>{addInputs(inputs)}</h3> */}
          {/* <NumberRandomizer  /> */}
          {/* <div>{inputs}</div> */}
          {/* 
      //@ts-ignore */}
        </PlayerContext.Provider>
      </form>
    </>
  );
}

export default PlayerInputGenerator;
