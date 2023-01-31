import clientPromise from ".././server/mongodb";
import { useForm, SubmitHandler } from "react-hook-form";
import { Router, useRouter } from "next/router";
import TroubleBrewingClasses from "./ClassSelection/TroubleBrewingClasses";
import styled, { css } from "styled-components";

interface IPlayerCount {
  maxNum: number;
  numOfPlayers: number[];
}
//
let maxNum: number;
let numOfPlayers: number[] = [];
//
function PlayerNumberSelect({ games }: any) {
  const router = useRouter();
  if (maxNum > 0 && Number.isFinite(Number(maxNum))) {
    maxNum = Math.round(Number(maxNum));
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPlayerCount>();
  const onSubmit: SubmitHandler<IPlayerCount> = (data) => {
    maxNum = data.maxNum;
    if (maxNum && !isNaN(maxNum) && maxNum > 0) {
      if (!numOfPlayers.includes(maxNum)) {
        numOfPlayers.push(maxNum);
        router.push("/ClassSelection/TroubleBrewingClasses");
      }
    } else if (maxNum <= 0 || isNaN(maxNum)) {
      // console.log("That is not a valid number!");
    }
    console.log(data);
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
      {/* <PlayerNumberSelect games={games} /> */}
    </>
  );
}

export default PlayerNumberSelect;
