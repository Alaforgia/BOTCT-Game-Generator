import clientPromise from "../server/mongodb";

export default function Games({ games, classes }: any) {
  return (
    <>
      <div>
        <ul>
          <h3>
            {games?.map((game: any, classes: any) => {
              console.log("games is > ", game._id);
              console.log("classes is > ", classes);

              return (
                <>
                  <h1>{game?.name}</h1>
                  <li key={game._id}>
                    {/* <h4>{game?.classes?.class_name}</h4> */}
                    <h4>{game?._id}</h4>
                    {Object.keys(game.classes[0]).map((i: any) => {
                      return <div key={i}>{i}</div>;
                    })}
                  </li>
                </>
              );
            })}
          </h3>
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
