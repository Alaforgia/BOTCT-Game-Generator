import { useGetPlayers, useAddPlayer, StoreContextProvider } from "../src/context/store";
import { useState, useContext, createContext, useRef, useEffect } from "react";

const AddPlayers = (): any => {
  const getPlayers = useGetPlayers();
  const addPlayer = useAddPlayer([]);
  useEffect(() => {
    AddPlayers();
    // getPlayers();
  }, []);

  // const numPlayers = useNumPlayers();
  // const [numOfPlayers, setNumOfPlayers] = useState(0);

  // const onClickNumberOfPlayers = (e: any): any => {
  //   const numPlayers = e.target.value;

  //   setNumOfPlayers(numOfPlayers);
  //   if (numOfPlayers > 0) {
  //     const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
  //     addPlayer(generateInputs);
  //   } else {
  //     addPlayer("");
  //   }
  // };
  console.log("working?");

  return (
    <>
      <form>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
      {/* {getPlayers} */}
    </>
  );
};

function UsePlayerContext(): any {
  return (
    <>
      <StoreContextProvider>
        <AddPlayers />
      </StoreContextProvider>
    </>
  );
}

export default function PlayerContext() {
  return (
    <div>
      <UsePlayerContext />
    </div>
  );
}
