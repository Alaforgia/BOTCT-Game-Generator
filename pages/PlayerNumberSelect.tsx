import clientPromise from ".././server/mongodb";
import { useForm, SubmitHandler } from "react-hook-form";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import styled, { css } from "styled-components";
import TroubleBrewingClasses from "./ClassSelection/TroubleBrewingClasses";

interface IPlayerCount {
  maxNum: number;
  numOfPlayers: number[];
}
//
let maxNum: number;
let numOfPlayers: number[] = [];
//
function PlayerNumberSelect({ games, numData }: any) {
  const router = useRouter();
  const [output, setOutput] = useState<String>("");
  //
  // if (maxNum > 0 && Number.isFinite(Number(maxNum))) {
  //   maxNum = Math.round(Number(maxNum));
  // }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPlayerCount>();

  const onSubmit: SubmitHandler<IPlayerCount> = (data) => {
    games.map((game: any) => {
      if (game.name === "Trouble Brewing") {
        maxNum = data.maxNum;
        if (maxNum && !isNaN(maxNum) && Number.isInteger(maxNum) && maxNum >= 5 && maxNum < 21) {
          if (!numOfPlayers.includes(maxNum)) {
            numOfPlayers.push(maxNum);
            router.push("/ClassSelection/TroubleBrewingClasses");
          }
        } else if (maxNum < 5 || isNaN(maxNum) || !Number.isInteger(maxNum)) {
          setOutput("Please enter a number between 5 and 20");
        }
        console.log(data);
      }
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue=""
          {...register("maxNum", { required: true })}
          aria-invalid={errors.maxNum ? "true" : "false"}
        />
        {errors.maxNum?.type === "required" && <p role="alert"> Number required</p>}
        <input type="submit" />
      </form>
      <h3>{output}</h3>
    </>
  );
}

export default PlayerNumberSelect;

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
