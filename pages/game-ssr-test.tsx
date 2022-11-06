import clientPromise from "../server/mongodb";

export default function Games({ games, classes }: any) {
  return (
    <>
      <div>
        <ul>
          {games?.map((game: any, classes: any) => {
            console.log("games is > ", game.classes[0].Townsfolk[0]);
            console.log("classes is > ", classes);
            return (
              <>
                <h1>{game?.name}</h1>
                <li key={game._id}>
                  <h2>{game?.classes[0]?.Townsfolk[0].class_name}</h2>
                  <h4>{game?.classes[0]?.Townsfolk[0].class_ability}</h4>
                  {Object.keys(game.classes[0].Townsfolk[0]).map((i: any) => {
                    return <div key={i}>{i}</div>;
                  })}
                </li>
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
