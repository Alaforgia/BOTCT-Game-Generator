import clientPromise from "../server/mongodb";

export default function Games({ games }: any) {
  return (
    <>
      <div>
        <h1>Trouble Brewing</h1>
        <ul>
          <h3>
            {games?.map((game: any, index: any) => {
              <li key={index}>
                {game?._id}
                <h3>{game?.name}</h3>
                <h4>{game?.class_id}</h4>
              </li>;
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
