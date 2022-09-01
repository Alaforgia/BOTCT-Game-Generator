import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useAddPlayers, useGetPlayers, useNumOfPlayers, StoreContextProvider } from "../src/context/players-store";




function UsePlayerState() {
  // console.log("you clicked = ", AddInputs());

  return <></>;
}

export default function Players() {
  return (
    <div>
      <UsePlayerState />
    </div>
  );
}
