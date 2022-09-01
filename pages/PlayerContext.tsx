import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { create } from "domain";

export const InputContext: any = createContext([]);

export const InputContextProvider = ({ children }: any): any => (
  <InputContext.Provider value={useState([])}>{children}</InputContext.Provider>
);

function PlayerContext() {
  const router = useRouter();
  const prevNumOfPlayers: any = useRef(InputContext);
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
    // @ts-ignore
    // const players = prevNumOfPlayers.current.value;
    const playerInputs = players.map((persons: any, index: any): any => (
      <PlayerCountInput name="newInputs" key={persons.toString()} id={persons.id} type="text" />
      // <div>{persons}</div>
      // <div>{index}</div>
      // <div>{index.key}</div>
    ));

    return <div>{playerInputs}</div>;
  };

  const handleClick = () => {
    // prevNumOfPlayers.current.value;
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
    router.push("/NumberRandomizer");
  };

  return (
    <div>
      <PlayerCountInput />
      {/* <input ref={prevNumOfPlayers} type="text" name="players" /> */}
      <button onClick={handleClick}>SUBMIT</button>
      {/* <InputContextProvider value={prevNumOfPlayers}> */}
      {/* <AddInputsContext.Provider value={playerInputs}> */}
      {players.length ? <div>{addInputs()}</div> : null}
      {/* </AddInputsContext.Provider> */}
      {/* </InputContextProvider> */}
    </div>
  );
}
// export const StoreContext = createContext<ReturnType<typeof addInputs> | null>(null);
//@ts-ignore
export const AddInputsContext = createContext<ReturnType<typeof addInputs> | null>(null);

export const AddInputsContextProvider = ({ children }: { children: React.ReactNode }): any => (
  <AddInputsContext.Provider value={addInputs()}>{children}</AddInputsContext.Provider>
);

export default PlayerContext;
