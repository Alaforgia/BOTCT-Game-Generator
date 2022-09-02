import { useState, useContext, createContext, useRef, useEffect } from "react";
import {
  useAddNumOfPlayers,
  useGetPlayers,
  useNumOfPlayers,
  useAddInputs,
  PlayersStoreContextProvider,
} from "../src/context/players-store";

const PlayerCountInput: any = (props: any) => {
  const prevNumOfPlayers: any = useRef(useGetPlayers);
  return (
    <>
      <input ref={prevNumOfPlayers} value={props.value} type="text" name="players"></input>
    </>
  );
};

const AddInputs = (): any => {
  const inputs = useAddInputs();
  const getPlayers = useGetPlayers();
  // const players = prevNumOfPlayers.current.value;
  // const players = useGetPlayers;
  // @ts-ignore
  // const playerInputs = players.map((persons: any, index: any): any => (
  //   <input
  //     // @ts-ignore
  //     name="newInputs"
  //     key={persons.toString()}
  //     id={persons.id}
  //     type="text"
  //   />
  //   // <div>{persons}</div>
  //   // <div>{index}</div>
  //   // <div>{index.key}</div>
  // ));
  return (
    <>
      {inputs}
      <PlayerCountInput key={inputs} />
      {getPlayers}
    </>
  );
  // inputs.map((persons: any, index: any): any => (
  //   <PlayerCountInput
  //     // @ts-ignore
  //     name="newInputs"
  //     key={persons.toString()}
  //     id={persons.id}
  //     type="text"
  //   />
  // ));

  // <PlayerCountInput>{ inputs }</PlayerCountInput>
  // <input></input>;
};

const InputsOnClick = () => {
  const addPlayers = useAddNumOfPlayers();
  const getPlayers: any = useGetPlayers();
  console.log("working", addPlayers);

  return (
    <>
      <button onClick={addPlayers}>Submit</button>

      {/* {getPlayers.length ? <div>{AddInputs()}</div> : null} */}
    </>
  );
};

function UsePlayerState() {
  // console.log("you clicked = ", AddInputs());
  const players = useGetPlayers;
  return (
    <div>
      <AddInputs />
      <InputsOnClick />
    </div>
  );
}

export default function Players() {
  return (
    <div>
      <PlayersStoreContextProvider>
        <UsePlayerState />
      </PlayersStoreContextProvider>
    </div>
  );
}
