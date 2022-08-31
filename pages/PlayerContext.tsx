import { useState, useContext, createContext, useRef, useEffect } from "react";

function PlayerContext() {
  const prevNumOfPlayers: any = useRef([]);
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [players, setPlayers] = useState(prevNumOfPlayers);

  // const onClickNumberOfPlayers = (e: any): any => {
  //   const numOfPlayers = prevNumOfPlayers;

  //   setNumOfPlayers(numOfPlayers);
  //   if (numOfPlayers > 0) {
  //     const generateInputs: any = Array.from(Array(Number(numOfPlayers)).keys());
  //     setPlayers(generateInputs);
  //   } else {
  //     setPlayers([]);
  //   }
  // };

  const addInputs = (): any => {
    // @ts-ignore
    // const [numOfPlayersInputs, setNumOfPlayersInputs] = useContext(PlayerContext);
    return players.map((persons: any, index: any): any => (
      <input
        name="newInputs"
        key={index.id}
        type="text"
        // defaultValue={persons}
        // onChange={onClickNumberOfPlayers}
      ></input>
    ));
  };

  const handleClick = () => {
    prevNumOfPlayers.current.value;
    console.log(prevNumOfPlayers.current.value);
    const numOfPlayers = prevNumOfPlayers;

    setNumOfPlayers(numOfPlayers);
    if (numOfPlayers > 0) {
      const generateInputs: any = Array.from(Array(Number(numOfPlayers)).keys());
      setPlayers(generateInputs);
    } else {
      setPlayers([]);
    }
    //@ts-ignore
    // console.log("What is onClickNumberOfPlayers? = ", onClickNumberOfPlayers());
    //@ts-ignore
    // onClickNumberOfPlayers();
    //@ts-ignore
    // addInputs();

    return (
      <form>
        <input
          type="text"
          // defaultValue={numOfPlayers}
          // ref={prevNumOfPlayers}
          // value={numOfPlayers}
          // onChange={(e) =>
          //   //@ts-ignore
          //   setNumOfPlayers(e.target.value)
          // }
          // onChange={onClickNumberOfPlayers}
        ></input>
      </form>
    );
  };
  return (
    <div>
      <input ref={prevNumOfPlayers} type="text" name="players" />
      <button onClick={handleClick}>SUBMIT</button>
      {players.length ? <div>{addInputs()}</div> : null}
      {/* {numOfPlayers} */}
    </div>
  );
}

export default PlayerContext;
