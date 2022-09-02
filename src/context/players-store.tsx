import { useState, useRef, createContext, useContext } from "react";

const usePlayersStore = () => {
  const prevNumOfPlayers: any = useRef([]);
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState(prevNumOfPlayers);
  console.log("what is this = ", prevNumOfPlayers);
  return {
    players,
    numOfPlayers,
    prevNumOfPlayers,
    // Initial input that generate inputs based on number value given
    addNumOfPlayers: (): any => {
      const numOfPlayers = prevNumOfPlayers.current.value;
      setNumOfPlayers(numOfPlayers);
      if (numOfPlayers > 0) {
        const generateInputs: any = Array.from(Array(Number(numOfPlayers)).keys());
        setPlayers(generateInputs);
      } else {
        setPlayers([]);
      }
      console.log("Clicked");
    },
    //
    addInputs: (): any => {
      // const playerInputs =
      players.map((player: any, index: any): any => (
        <input ref={prevNumOfPlayers} name="newInputs" key={player.toString()} id={player.id} type="text" />
      ));
      // players.map((player: any) => player.id);

      // setPlayers([...players]);
    },
  };
};

const PlayersStoreContext = createContext<ReturnType<typeof usePlayersStore> | null>(null);

export const PlayersStoreContextProvider = ({ children }: any) => {
  return <PlayersStoreContext.Provider value={usePlayersStore()}>{children}</PlayersStoreContext.Provider>;
};

export const useAddNumOfPlayers = (): any => {
  useContext(PlayersStoreContext)?.addNumOfPlayers;
};

export const useGetPlayers = () => {
  useContext(PlayersStoreContext)?.players;
};

export const useNumOfPlayers = () => useContext(PlayersStoreContext)?.numOfPlayers;

export const useAddInputs = () => useContext(PlayersStoreContext)?.addInputs;

// export const usePrevNumOfPlayers = () => useContext(PlayersStoreContext)?.prevNumOfPlayers;
