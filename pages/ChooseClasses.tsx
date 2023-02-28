import clientPromise from ".././server/mongodb";
import { useState, useEffect } from "react";

function ChooseClasses({ games }: any) {
  return (
    <>
      {games?.map((game: any, classes: any, i: any) => {
        return (
          <>
            <div key={game._id}>
              <h1>{game?.name}</h1>
              {Object.entries(game?.classes[0]).map((game_class: any) => {
                return (
                  <>
                    <h2>{game_class[0]}</h2>
                    {game_class[1].map((sub_class: any) => {
                      return (
                        <>
                          <form>
                            <input type="checkbox" />
                            {sub_class?.class_name}
                            <label>{sub_class?.class_ability}</label>
                          </form>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
}

export default ChooseClasses;

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("game_data");

    const games = await db?.collection("game_types").find().toArray();

    return {
      props: { games: JSON.parse(JSON.stringify(games)) },
    };
  } catch (e) {
    console.error(e);
  }
}
