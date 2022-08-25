import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useAddPlayer, useGetPlayers, StoreContextProvider } from "../src/context/store";

const PlayerContext: any = createContext([]);
const NumberOfPlayersContext: any = createContext(0);
const PlayerContextProvider = ({ children }: any) => (
  <PlayerContext.Provider value={useState([])}>{children}</PlayerContext.Provider>
);
const NumberOfPlayersContextProvider = ({ children }: any) => (
  <NumberOfPlayersContext.Provider value={useState(0)}>{children}</NumberOfPlayersContext.Provider>
);

const AddPlayers = (e: any): any => {
  // @ts-ignore
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, setPlayers]: any = useContext(PlayerContext);
  const [numOfPlayers, setNumOfPlayers]: any = useContext(NumberOfPlayersContext);
  // setPlayers(generateInputs);
  // numOfPlayers = e.target.value;
  // setNumOfPlayers(numOfPlayers);
  // if (numOfPlayers > 0) {
  //   const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
  //   setPlayers(generateInputs);
  // } else {
  //   setPlayers([]);
  // }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          // defaultValue={numOfPlayers}
          // ref={numOfPlayersInput}
          value={numOfPlayers}
          // onChange={(e) => {
          //   setPlayers(e.target.value);
          // }}
          onChange={(e: any) => {
            const numOfPlayers = e.target.value;

            setNumOfPlayers(numOfPlayers);
            if (numOfPlayers > 0) {
              const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
              setPlayers(generateInputs);
            } else {
              setPlayers([]);
            }
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

const Container = () => {
  return (
    <>
      <div>
        <AddPlayers />
      </div>
    </>
  );
};

const AddInputs = () => {
  //@ts-ignore
  const [players]: any = useContext(PlayerContext);
  console.log("What is this? = ", players);
  return players.map((persons: any, index: any): any => {
    <input
      name="newInputs"
      key={index}
      type="text"
      // defaultValue={persons}
      // onChange={onClickNumberOfPlayers}
    ></input>;
  });
};

const NumberOfPlayers = (e: any): any => {
  const [players]: any = useContext(PlayerContext);
  console.log("What is this = ", AddInputs());

  return (
    <>
      <div>
        Players:{" "}
        {players.length ? (
          <div>
            <AddInputs />
          </div>
        ) : null}
      </div>
    </>
  );
};

function UsePlayerState() {
  // console.log("you clicked = ", AddInputs());

  return (
    <>
      <PlayerContextProvider>
        <NumberOfPlayersContextProvider>
          <Container />
          <NumberOfPlayers />
          {/* <AddInputs /> */}
        </NumberOfPlayersContextProvider>
      </PlayerContextProvider>
    </>
  );
}

export default function Players() {
  return (
    <div>
      <UsePlayerState />
    </div>
  );
}
