import clientPromise from ".././server/mongodb";
import { useForm, SubmitHandler } from "react-hook-form";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import styled, { css } from "styled-components";
import TroubleBrewingClasses from "./ClassSelection/TroubleBrewingClasses";
import Link from "next/link";
import ChooseClasses from "./ChooseClasses";

// Monday January 30th 8:51 PM
// Figure out what to do to persist the maxNum data to another component. I should create a new component that takes in the player count
// and then preselects the "Imp" and one of the minions. The Imp cannot be unselected, and neither can the Minion classes, but at least one
// Minion must be selected. I should decide if I should set conditions based on player count, if 5 (minimum players) is selected, there
// shouldn't be more than one Minion, but that can left to the players perhaps, at least for now.

interface IPlayerCount {
  maxNum: any;
  numOfPlayers: number[];
}
//
let maxNum: number;
let numOfPlayers: number[] = [];
//
export default function PlayerNumberSelect({ games }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPlayerCount>();
  const router = useRouter();
  const [output, setOutput] = useState("");

  const onSubmit: SubmitHandler<IPlayerCount> = (data) => {
    games.map((game: any) => {
      if (game.name === "Trouble Brewing") {
        const maxNum = parseInt(data.maxNum, 10);
        if (maxNum && !isNaN(maxNum) && maxNum >= 5 && maxNum < 21) {
          router.push({
            pathname: "/ChooseClasses",
            query: { maxNum: maxNum },
          });
          // <Link href={{ pathname: "/ChooseClasses", query: { maxNum: "maxNum" } }} />;
        } else {
          setOutput("Please enter a number between 5 and 20");
        }
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("maxNum", {
            required: true,
            min: 5,
            max: 20,
            valueAsNumber: true,
          })}
          aria-invalid={errors.maxNum ? "true" : "false"}
        />
        {errors.maxNum?.type === "required" && <p role="alert">Number required</p>}
        {errors.maxNum?.type === "min" && <p role="alert">Number must be at least 5</p>}
        {errors.maxNum?.type === "max" && <p role="alert">Number must be at most 20</p>}
        <input type="submit" />
      </form>
      <h3>{output}</h3>
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
