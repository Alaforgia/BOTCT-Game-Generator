import { useState, useRef, createContext, useContext } from "react";

const usePlayersStore = () => {
  const prevNumOfPlayers: any = useRef();
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState(prevNumOfPlayers);

  return {
    players,
    numOfPlayers,
    // Initial input that generate inputs based on number value given
    addNumOfPlayers: () => {
      const numOfPlayers = prevNumOfPlayers.current.value;
      setNumOfPlayers(numOfPlayers);
      if (numOfPlayers > 0) {
        const generateInputs: any = Array.from(Array(Number(numOfPlayers)).keys());
        setPlayers(generateInputs);
      } else {
        setPlayers([]);
      }
    },
    //
  };
};

const PlayersStoreContext = createContext<ReturnType<typeof usePlayersStore> | null>(null);

export const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <PlayersStoreContext.Provider value={usePlayersStore()}>{children}</PlayersStoreContext.Provider>;
};

export const useAddPlayers = () => {
  return useContext(PlayersStoreContext)?.addNumOfPlayers;
};

export const useGetPlayers = () => {
  return useContext(PlayersStoreContext)?.players;
};

export const useNumOfPlayers = () => useContext(PlayersStoreContext)?.numOfPlayers;

