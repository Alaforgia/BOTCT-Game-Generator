import React from "react";
import clientPromise from "../../server/mongodb";

export default function TroubleBrewingClasses({games}: any) {
  return (
    <>
      <ul>
        {games?.map((game: any, classes: any, i: any) => {
          return (
            <>
              <div key={game._id}>
                <h1>{game?.name} Classes</h1>
                {Object.entries(game?.classes[0]).map((game_class: any) => {
                  return (
                    <>
                      <h2>{game_class[0]}</h2>
                      {game_class[1].map((sub_class: any) => {
                        return (
                          <>
                            <h4>{sub_class?.class_ability}</h4>
                            <h4>{sub_class?.class_name}</h4>
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
      </ul>
    </>
  );
}

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
