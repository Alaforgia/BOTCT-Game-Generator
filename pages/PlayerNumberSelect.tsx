import clientPromise from ".././server/mongodb";
import { useForm, SubmitHandler } from "react-hook-form";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import styled, { css } from "styled-components";
import TroubleBrewingClasses from "./ClassSelection/TroubleBrewingClasses";
import Link from "next/link";
import ChooseClasses from "./ChooseClasses";

interface IPlayerCount {
  maxNum: any;
  numOfPlayers: number[];
  data: any;
}
//
// let maxNum: number;
let numOfPlayers: number[] = [];
//
export default function PlayerNumberSelect({ games }: any) {
  const [output, setOutput] = useState("");
  const [maxNum, setMaxNum] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPlayerCount>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IPlayerCount> = (data: any) => {
    if (data.maxNum && !isNaN(data.maxNum) && data.maxNum > 4 && data.maxNum < 21) {
      setMaxNum(data.maxNum);
      setOutput("In Range");
      // router.push("/ChooseClasses");
      // router.push({
      //   pathname: "/ChooseClasses",
      //   query: { maxNum: data },
      // });
      // <Link href={{ pathname: "/ChooseClasses", query: { maxNum: "maxNum" } }} />;
    }
    console.log("maxNum: ", maxNum);
    console.log("data: ", data.maxNum);
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
      <h2>{output}</h2>
      <h2>{maxNum}</h2>
      {/* <ChooseClasses games={games} maxNum={maxNum} /> */}
    </>
  );
}

// You have to try to create a useRef or use a state manager to access the maxNum.
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
