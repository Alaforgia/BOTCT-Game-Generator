import clientPromise from ".././server/mongodb";
import { useState, useEffect } from "react";

function ChooseClasses({ games }: any) {
  const [impChecked, setImpChecked] = useState(true); // initialize Imp checkbox to be checked
  const [minionChecked, setMinionChecked] = useState(true);

  useEffect(() => {
    setImpChecked(true); // update Imp checkbox state whenever component renders
    setMinionChecked(true);
  }, []);
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
                            <input
                              type="checkbox"
                              // checked={sub_class.class_name === "Imp" ? impChecked : false}
                              onChange={() => {
                                if (sub_class.class_name === "Imp") {
                                  setImpChecked(!impChecked);
                                }
                              }}
                              disabled={sub_class.class_name === "Imp" && impChecked}
                            />
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
