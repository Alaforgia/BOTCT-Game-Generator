import { useState, createContext, useContext } from 'react';
import useNumberRandomizer from '../hooks/useNumberRandomizer';
export interface Player {
  name: string;
  id: number;
}
const randomNumberGenerator = useNumberRandomizer
const useStore = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  return {
    players,
    addPlayer: ({name}:{name: string}) => {
      // get all the player ids in the game
      const currentPlayerIdsInGame = players.map(player => player.id);

      // generate a random number, not currently in use
      const randomNumber = randomNumberGenerator(currentPlayerIdsInGame);

      // add the player to list of players
      setPlayers([...players, { name: name, id: randomNumber }])
    },
  };
};

const StoreContext = createContext<ReturnType<typeof useStore> | null>(null);

export const StoreContextProvider = ({ children }: { children: React.ReactNode}) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  )
}