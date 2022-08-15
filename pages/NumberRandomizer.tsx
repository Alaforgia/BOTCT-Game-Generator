import styled from "styled-components";

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

function NumberRandomizer() {
  return (
    <div>
      <Wrapper>
        <Forms>
          <Input type="text"></Input>
          <Input type="text"></Input>
          <Input type="text"></Input>
        </Forms>
        <Button>Create</Button>
      </Wrapper>
    </div>
  );
}

export default NumberRandomizer;
