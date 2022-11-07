import clientPromise from "../server/mongodb";

export default function Games({ games, classes }: any) {
  return (
    <>
      <div>
        <ul>
          {games?.map((game: any, classes: any, i: any) => {
            // const allClasses: any = game?.classes[0]?.Townsfolk[0].flat();

            // console.log("classes is > ", classes);
            console.log(">>", game.classes[0].Townsfolk);
            //@ts-ignore
            for (const key of games) {
              console.log("keys is > ", key);
            }

            return (
              <>
                <h1>{game?.name}</h1>
                <div key={game._id}>
                  {/* Washerwoman */}
                  <h3>{game?.classes[0]?.Townsfolk[0].class_name}</h3>
                  <h4>{game?.classes[0]?.Townsfolk[0].class_ability}</h4>
                  {/* Monk */}
                  <h3>{game?.classes[0]?.Townsfolk[1].class_name}</h3>
                  <h4>{game?.classes[0]?.Townsfolk[1].class_ability}</h4>
                  {/* Librarian */}
                  <h3>{game?.classes[0]?.Townsfolk[2].class_name}</h3>
                  <h4>{game?.classes[0]?.Townsfolk[2].class_ability}</h4>
                  {/* Ravenkeeper */}
                  <h3>{game?.classes[0]?.Townsfolk[3].class_name}</h3>
                  <h4>{game?.classes[0]?.Townsfolk[3].class_ability}</h4>
                  {/* Figure out how to map every Class in the data to avoid hard coding everything */}
                  {/* <div key={i}>{game?.classes}</div> */}
                </div>
                {/* <div key={i}>{allClasses}</div> */}
              </>
            );
          })}
        </ul>
      </div>
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
