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
  console.log("What is numOfPLayers? = ", numOfPlayers);

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
            e.preventDefault();
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
  return players?.map((persons: any, index: any): any => {
    <input
      name="newInputs"
      key={persons}
      type="text"
      // defaultValue={persons}
      // onChange={onClickNumberOfPlayers}
    ></input>;
  });
};

const NumberOfPlayers = (e: any): any => {
  const [players]: any = useContext(PlayerContext);
  const prevNumOfPlayers: any = useRef([]);
  useEffect((): any => {
    prevNumOfPlayers.current = players;
  }, [players]);
  console.log("What is AddInputs = ", AddInputs());
  console.log("What is preNumOfPlayers? = ", prevNumOfPlayers.current);
  // console.log("What is players.map? = ", players.map);

  // const inputs = players.length ? (
  //   <div>
  //     {AddInputs()}
  //     <AddInputs />
  //   </div>
  // ) : null;
  return (
    <>
      <div>
        Players:
        {/* {players} */}
        {/* {inputs} */}
        {players.length ? (
          <div>
            {players}
            {AddInputs()}
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
      <NumberOfPlayersContextProvider>
        <PlayerContextProvider>
          <Container />
          <NumberOfPlayers />
          {/* <AddInputs /> */}
        </PlayerContextProvider>
      </NumberOfPlayersContextProvider>
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
