import styled, { css } from "styled-components";
import { useEffect, useState, createContext, useContext, useRef } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import GameSelection from "../src/components/GameSelection";
import clientPromise from "../server/mongodb";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
`;

const Forms = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

// export const Input = styled.input`
//   margin: ${(props) => props.theme.inputMargin};
//   padding: ${(props) => props.theme.inputPadding};
// `;

const Button = styled.button``;

const Output = styled.h4``;

// type Player = [{ id: number; name: string }];

//@ts-ignore
// const playerContext: any = createContext();

function NumberRandomizer() {
  const router = useRouter();
  const prevNumOfPlayers: any = useRef([]);
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState(prevNumOfPlayers);

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

  const gameTypeClick = () => {
    router.push("/ClassSelection/TroubleBrewingClasses");
  };

  // @ts-ignore
  const inputs = players.length ? <div>{addInputs(prevNumOfPlayers.current)}</div> : null;

  return (
    <>
      <div>
        <main>
          <h2>Add Players</h2>
          <form>
            <PlayerCountInput />
          </form>
          <button type="submit" value={numOfPlayers} onClick={handleClick}>
            Add Player
          </button>

          <div>{inputs}</div>
        </main>
      </div>
      <GameSelection />
    </>
  );
}

export default NumberRandomizer;

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
