import { useState, useContext, createContext, useRef, useEffect } from "react";

const PlayerContext: any = createContext([]);
const PlayerContextProvider = ({ children }: any) => (
  <PlayerContext.Provider value={useState([])}>{children}</PlayerContext.Provider>
);

const AddInputs = (): any => {
  // @ts-ignore
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, setPlayers]: any = useContext(PlayerContext);

  // const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
  // setPlayers(generateInputs);
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          // defaultValue={numOfPlayers}
          // ref={numOfPlayersInput}
          // value={numOfPlayers}
          // onChange={(e) =>
          //   //@ts-ignore
          //   setNumOfPlayers(e.target.value)
          // }
          onChange={(e) => setPlayers(e.target.value)}
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
        <AddInputs />
      </div>
    </>
  );
};

const NumberOfPlayers = (): any => {
  const [players]: any = useContext(PlayerContext);
  return (
    <>
      <div>Players: {players}</div>
    </>
  );
};

function UsePlayerState() {
  console.log("you clicked = ", AddInputs());

  return (
    <>
      <PlayerContextProvider>
        <Container />
        <NumberOfPlayers />
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
