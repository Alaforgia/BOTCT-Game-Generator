import React from "react";
import clientPromise from "../../server/db/conn";
// import { IGameData } from "../types";

export default function GameSelection({ game_types }: any): any {
  return (
    <>
      <div>
        <h2>Select Game Type</h2>
        <div>{game_types.map((type: any)=>{
          <li>
            <h3>{type.name}</h3>
          </li>
        })}</div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("game_data");

    const game_types = await db.collection("game_types").find({}).toArray();
    return {
      props: { game_types: JSON.parse(JSON.stringify(game_types)) },
    };
  } catch (e) {
    console.error(e);
  }
}
