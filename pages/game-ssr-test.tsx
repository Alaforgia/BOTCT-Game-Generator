import clientPromise from "../server/mongodb";

export default function Games({ games }: any) {
  return (
    <>
      <div>
        <h1>Trouble Brewing</h1>
        {/* {games?.classes} */}
        <ul>
          <h3>
            {games?.map((game: any, index: any) => {
              console.log("games is > ", games);
              return (
                <>
                  <li key={index}>
                    <h3>{game?.name}</h3>
                    <h4>{game?.classes.Townsfolk}</h4>
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
