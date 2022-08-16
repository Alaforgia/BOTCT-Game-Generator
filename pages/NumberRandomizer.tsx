import styled from "styled-components";
import { useEffect, useState } from "react";

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

const Input = styled.input`
  margin: 5px;
  padding: 5px;
`;

const Button = styled.button``;

const Output = styled.h4``;

type Player = [id: number, name: string];

function NumberRandomizer() {
  const [num, setNum] = useState(0);
  const [players, setPlayer]: any = useState<Player[]>([]);

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
    event.preventDefault();
    // setPlayer(event.target.value);
    // setPlayer((players: any) => [...players]);
    // const value = event.target.value;
    // setPlayer({
    //   ...players,
    //   [event.target.name]: value,
    // });
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const toArray = Object.values(players);
    const value = event.target.value;
    setPlayer(toArray);
    setPlayer(value);
    toArray.flatMap((name: any): any => {
      return [players].join("");

      // console.log(key);
      // console.log(value);
    });
    console.log("handle change = ", toArray);
  };
  // const toArray = Object.values(players);
  // console.log("map =", toArray);

  // console.log("what is this = ", typeof players);

  return (
    <div>
      <Wrapper>
        {/* {players.map((player: any, index: any): any => {
          return (
            <div key={index}>
              <p>{player.name}</p>
            </div>
          );
        })} */}
        <Forms onSubmit={handlePlayerSubmit}>
          {/* <Input type="text" value={players.name} onChange={handleChange}></Input> */}
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          <Input type="text" onChange={handleChange}></Input>
          {/* <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input>
          <Input type="text" value={players} onChange={(e: any) => setPlayer(e.target.value)}></Input> */}
        </Forms>
        <Button onClick={() => numberButtonHandler()}>Create</Button>
        <Output>
          Number: {num} <br></br>
          Players: {players}
          {/* {players.map((player: any, index: any): any => {
            return <div key={player.id}>{players}</div>;
          })} */}
        </Output>
      </Wrapper>
    </div>
  );
}

export default NumberRandomizer;
