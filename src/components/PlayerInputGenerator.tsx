import React from "react";
import { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";

//@ts-ignore
export const PlayerContext: any = createContext();

function PlayerInputGenerator(): JSX.Element {
  //@ts-nocheck
  const router = useRouter();
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState([]);
  const value = players;
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
    // onClickNumberOfPlayers(event);
    // addInputs();
    console.log("you clicked Submit", event);
  };
  //

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/NumberRandomizer");
    onClickNumberOfPlayers(e);
  };
  //@ts-ignore
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={numOfPlayers} onChange={onClickNumberOfPlayers}></input>
      </form>
      {/* <Link href="/NumberRandomizer"> */}
      <button type="submit" onClick={handleClick}>
        SUBMIT
      </button>
      {/* </Link> */}
      {/* <h3>{addInputs()}</h3> */}
      {/* <form> */}
        {/* 
      //@ts-ignore */}
        <PlayerContext value={value}>
          {/* {players.length ? <div>{addInputs()}</div> : null} */}
          {addInputs()}
          {/* 
      //@ts-ignore */}
        </PlayerContext>
      {/* </form> */}
    </>
  );
}

export default PlayerInputGenerator;
