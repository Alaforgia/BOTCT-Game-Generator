import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IPlayerCount {
  maxNum: number;
  numOfPlayers: number[];
}

let maxNum: number;
let numOfPlayers: number[] = [];
//
function PlayerNumberSelect() {
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
      }
    } else if (maxNum <= 0 || isNaN(maxNum)) {
      console.log("That is not a valid number!");
    }
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Enter Player Number" {...register("maxNum")} />
        <input type="submit" />
      </form>
    </>
  );
}

export default PlayerNumberSelect;
