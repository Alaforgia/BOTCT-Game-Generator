/* eslint-disable import/no-anonymous-default-export */
import { WithId, Document } from "mongodb";
import React from "react";
import clientPromise from "../../server/db/conn";

export default async (req: any, res: { json: (arg0: WithId<Document>[]) => void }) => {
  try {
    const client = await clientPromise;
    const db = client.db("game_data");

    const game_types = await db.collection("game_types").find({}).toArray();

    res.json(game_types);
  } catch (e) {
    console.error(e);
  }
};
