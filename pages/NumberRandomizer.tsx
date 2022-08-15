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

function NumberRandomizer(props: any) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const numberButtonHandler = () => {
    setNum(randomNumber(1, 10));
  };
  // console.log(randomNumber(1, 10));

  return (
    <div>
      <Wrapper>
        <Forms>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
        </Forms>
        <Button onClick={() => numberButtonHandler()}>Create</Button>
        <Output>Number: {num}</Output>
      </Wrapper>
    </div>
  );
}

export default NumberRandomizer;
