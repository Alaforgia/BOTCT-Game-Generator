import clientPromise from "../server/mongodb";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AsyncLocalStorage } from "async_hooks";

interface INameInput {
  playerTag: string;
  currName: any;
  player: any;
  data: any;
  nameVal: any;
}

export default function Games({ games, props }: any) {
  const inputRef = useRef<HTMLDivElement | null>(null);

  const playerList = [[""]];
  const [player, setPlayer] = useState(playerList);
  const [currName, setCurrName]: any = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
    setValue,
    getValues,
  } = useForm<INameInput>({ defaultValues: { playerTag: "" } });

  const onSubmit: SubmitHandler<INameInput> = (data: any, e: any) => {
    // if (currName) {
    //   setCurrName(player);
    // }
    const newName = [...player];
    newName[currName] = data.playerTag;
    setPlayer(newName);
    setCurrName(currName + 1);
    // console.log(data);
    e.preventDefault();
    // setPlayer(e.target.value);
    // setCurrName(e.target.value);
    console.log("player is => ", player);
    // console.log("data.playerTag is => ", data.playerTag);
    console.log("currName is => ", currName);
  };

  useEffect(() => {
    // register("playerTag", { required: true });
    if (formState.isSubmitSuccessful) {
      reset({ playerTag: "" });
    }
  }, [formState, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first">Player Name</label>
        <input
          id="first"
          {...register("playerTag", {
            required: true,
            maxLength: 20,
            // onChange: (e) => {
            //   setPlayer(e.target.value);
            // },
          })}
        />
        {errors.playerTag && <span>This field is required</span>}
        <input type="submit" />
      </form>
      {currName}
      {player}
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
