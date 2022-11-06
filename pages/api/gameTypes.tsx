/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import clientPromise from "../../server/mongodb";

export default async function handler(req: any, res: any) {
  try {
    const client = await clientPromise;
    const db = client.db("game_data");

    const games = await db?.collection("game_types").find({}).sort({}).toArray();

    res.json(games);
  } catch (e) {
    console.log(e);
  }
}
