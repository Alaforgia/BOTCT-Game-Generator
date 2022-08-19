import styled, { css } from "styled-components";
import { useEffect, useState, createContext, useContext } from "react";
import PlayerContext from "../src/components/PlayerInputGenerator";
import Home from ".";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
`;

const Forms = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

export const Input = styled.input`
  margin: ${(props) => props.theme.inputMargin};
  padding: ${(props) => props.theme.inputPadding};
`;

const Button = styled.button``;

const Output = styled.h4``;

// type Player = [{ id: number; name: string }];

//@ts-ignore
// const playerContext: any = createContext();

function NumberRandomizer({ persons }: any) {
  //@ts-ignore
  const value: any = useContext(PlayerContext);

  const [num, setNum] = useState(0);
  const [players, setPlayers]: any = useState([]);
  const [numOfPlayers, setNumOfPlayers] = useState(0);

  useEffect(() => {
    // setPlayer();
  }, []);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const numberButtonHandler = () => {
    setNum(randomNumber(1, 10));
  };

  const handlePlayerSubmit = (event: any): void => {
    // event.preventDefault();
    // setPlayer(event.target.value);
    // setPlayer((players: any) => [...players]);
    // const value = event.target.value;
    // setPlayer({
    //   ...players,
    //   [event.target.name]: value,
    // });
  };

  // const handleChange = (event: any) => {
  //   // event.preventDefault();
  //   const toArray = Object.values(players);
  //   if (toArray === undefined || null) {
  //     const values = Object.values(players);
  //   } else {
  //     console.log(players);
  //   }
  //   const arrayMap: any = toArray.forEach((element) => console.log(element));
  //   const value = event.target.value;
  //   setPlayer(arrayMap);
  //   setPlayer(value);

  //   console.log("handle change = ", arrayMap);
  // };
  // const toArray = Object.values(players);
  // console.log("map =", toArray);

  // console.log("what is this = ", typeof players);
  const player: any = [];

  // const onClickNumberOfPlayers = (e: any): any => {
  //   const numOfPlayers = e.target.value;

  //   setNumOfPlayers(numOfPlayers);
  //   if (numOfPlayers > 0) {
  //     const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
  //     setPlayers(generateInputs);
  //   } else {
  //     setPlayers([]);
  //   }
  // };

  const addInputs = (): any => {
    return players.map((persons: any): any => (
      <input
        name="inputs"
        key={persons}
        type="text"
        // onChange={onClickNumberOfPlayers}
      ></input>
    ));
  };

  return (
    <>
      {value}
      <div>
        <Wrapper>
          {/* {players.map((player: any, index: any): any => {
          return (
            <div key={index}>
              <p>{player.name}</p>
            </div>
          );
        })} */}
          {/* <Forms onSubmit={handlePlayerSubmit}> */}
          {/* <Input type="text" onChange={handleChange}></Input> */}
          {/* </Forms> */}
          {/* <input type="text" value={numOfPlayers} onChange={onClickNumberOfPlayers}></input> */}
          {/* <Forms>{players.length ? <div>{addInputs()}</div> : null}</Forms> */}
          {/* <Forms>{value}</Forms> */}
          <Button onClick={() => numberButtonHandler()}>Create</Button>
          <Output>
            Number: {num} <br></br>
            {/* Players: {players} */}
            {/* {players.map((player: any, index: any): any => {
            return <div key={player.id}>{players.player}</div>;
          })} */}
          </Output>
        </Wrapper>
      </div>
    </>
  );
}

export default NumberRandomizer;
