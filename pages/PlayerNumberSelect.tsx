import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IPlayerCount {
  example: string;
  maxNum: number;
}

let maxNum: number;
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
  const onSubmit: SubmitHandler<IPlayerCount> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input type="submit" />
      </form>
    </>
  );
}

export default PlayerNumberSelect;
