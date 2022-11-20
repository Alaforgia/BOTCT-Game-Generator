import clientPromise from "../server/mongodb";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface INameInput {
  playerTag: String;
  setName: any;
  data: any;
}

export default function Games({ games, classes }: any) {
  const [playerTag, setPlayerTag] = useState("");

  // useEffect(() => {
  //   setName(name);
  // }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<INameInput>();
  const onSubmit: SubmitHandler<INameInput> = (data: any, e: any) => {
    console.log(data);
    e.preventDefault();
    setPlayerTag(e.target.value);
    console.log("playerTag is => ", playerTag, data.playerTag);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Player Name</label>
        {/* <input defaultValue="Name" {...register("playerTag")} /> */}
        <input {...register("playerTag", { required: true, maxLength: 20 })} />
        {errors.playerTag && <span>This field is required</span>}
        <input type="submit" />

        {/* <span>{data.playerTag}</span> */}
      </form>
      {/* <h3>{data}</h3> */}
      {/* <h3>{data.playerTag}</h3> */}
      <div>
        <ul>
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
                              <h4>{sub_class?.class_ability}</h4>
                              <h4>{sub_class?.class_name}</h4>
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                  {/* Washerwoman */}
                  {/* <h3>{game?.classes[0]?.Townsfolk[0].class_name}</h3> */}
                  {/* <h4>{game?.classes[0]?.Townsfolk[0].class_ability}</h4> */}
                  {/* Monk */}
                  {/* <h3>{game?.classes[0]?.Townsfolk[1].class_name}</h3> */}
                  {/* <h4>{game?.classes[0]?.Townsfolk[1].class_ability}</h4> */}
                  {/* Librarian */}
                  {/* <h4>{game?.classes[0]?.Townsfolk[2].class_ability}</h4> */}
                  {/* <h3>{game?.classes[0]?.Townsfolk[2].class_name}</h3> */}
                  {/* Ravenkeeper */}
                  {/* <h3>{game?.classes[0]?.Townsfolk[3].class_name}</h3>
                  <h4>{game?.classes[0]?.Townsfolk[3].class_ability}</h4> */}
                  {/* Figure out how to map every Class in the data to avoid hard coding everything */}
                  {/* <div key={i}>{game?.classes}</div> */}
                </div>
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
