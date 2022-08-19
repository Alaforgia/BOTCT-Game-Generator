import React from "react";
import { useState, useContext, createContext } from "react";

//@ts-ignore
export const PlayersContext: any = createContext();

function PlayerContext() {
  const value = players;

  return (
    <div>PlayerContext</div>
  )
}

export default PlayerContext