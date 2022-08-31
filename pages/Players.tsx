import { useState, useContext, createContext, useRef, useEffect } from "react";
import { useAddPlayer, useGetPlayers, StoreContextProvider } from "../src/context/store";

const PlayerContext: any = createContext([]);
const NumberOfPlayersContext: any = createContext(0);
const PlayerContextProvider = ({ children }: any) => (
  <PlayerContext.Provider value={useState([])}>{children}</PlayerContext.Provider>
);
const NumberOfPlayersContextProvider = ({ children }: any) => (
  <NumberOfPlayersContext.Provider value={useState(0)}>{children}</NumberOfPlayersContext.Provider>
);

const AddPlayers = (e: any): any => {
  // @ts-ignore

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [players, setPlayers]: any = useContext(PlayerContext);
  const [numOfPlayers, setNumOfPlayers]: any = useContext(NumberOfPlayersContext);
  const prevNumOfPlayers: any = useRef();
  const prevPlayers: any = useRef();
  useEffect((): any => {
    prevNumOfPlayers.current = numOfPlayers;
    prevPlayers.current = players;
  }, [numOfPlayers, players]);

  // setPlayers(generateInputs);
  // numOfPlayers = e.target.value;
  // setNumOfPlayers(numOfPlayers);
  // if (numOfPlayers > 0) {
  //   const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
  //   setPlayers(generateInputs);
  // } else {
  //   setPlayers([]);
  // }
  // console.log("What is numOfPLayers? = ", numOfPlayers);
  // console.log("What is prevNumOfPlayers? = ", prevNumOfPlayers);

  // console.log("What is players @AddPLayers? = ", players);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    // addInputs();
  };

  const addInputs = () => {
    // e.preventDefault();
    //@ts-ignore
    // const [players]: any = useContext(PlayerContext);
    // const prevNumOfPlayers: any = useRef([]);
    // useEffect((): any => {
    //   prevNumOfPlayers.current = players;
    // }, [players]);
    // for (const key of players.keys()) {
    //   players.map((persons: any, index: any): any => {
    //     <input
    //       // ref={prevPlayers}
    //       name="newInputs"
    //       key={index}
    //       type="text"
    //       defaultValue={key}
    //       // onChange={onClickNumberOfPlayers}
    //     ></input>;
    //   });
    // }
    // if (players && numOfPlayers > 0) {
    //   players.map((persons: any, index: any): any => {
    //     <input
    //       // ref={prevPlayers}
    //       name="newInputs"
    //       key={index}
    //       type="text"
    //       // defaultValue={key}
    //       // onChange={onClickNumberOfPlayers}
    //     ></input>;
    //   });

    // } else {
    //   return console.log("players.map is not working");
    // }

    // console.log("What is AddInputs = ", addInputs());
    // return players.map((persons: any, index: any): any => {
    //   <input
    //     // ref={prevPlayers}
    //     name="newInputs"
    //     key={index}
    //     type="text"
    //     // defaultValue={persons}
    //     // onChange={onClickNumberOfPlayers}
    //   ></input>;
    // });
    // } else {
    //   console.log(".map not working!");
    // }
    console.log("is this working?");
    return (
      <>
        {/* {players.map((persons: any, index: any): any => {
          <input
            // ref={prevPlayers}
            name="newInputs"
            key={persons}
            type="text"
            // defaultValue={key}
            // onChange={onClickNumberOfPlayers}
          ></input>;
        })} */}

        {players.length ? (
          <div>
            {players.map((persons: any, index: any): any => {
              <input
                // ref={prevPlayers}
                name="newInputs"
                key={index}
                type="text"
                // defaultValue={key}
                // onChange={onClickNumberOfPlayers}
              ></input>;
            })}
            {/* 
    //@ts-ignore */}
            {/* {addInputs()} */}
            {/* <AddInputs /> */}
          </div>
        ) : null}
      </>
    );
  };
  //@ts-ignore
  console.log("What is addInputs = ", addInputs());
  console.log("What is this? = ", players);
  console.log("is array?? = ", Array.isArray(players));
  // console.log("keys?? = ", players.keys());
  for (const key of players.keys()) {
    console.log(key);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // defaultValue={numOfPlayers}
          // ref={numOfPlayersInput}
          // ref={prevNumOfPlayers}
          // value={num}
          value={numOfPlayers}
          // onChange={(e) => {
          //   setPlayers(e.target.value);
          // }}
          onChange={(e: any) => {
            e.preventDefault();
            const numOfPlayers = e.target.value;

            setNumOfPlayers(numOfPlayers);
            if (numOfPlayers > 0) {
              const generateInputs: any = Array.from(Array(Number(e.target.value)).keys());
              setPlayers(generateInputs);
            } else {
              setPlayers([]);
            }
          }}
        ></input>
        <input type="submit"></input>
        {/* <div> NumOfPlayers: {numOfPlayers}</div> */}
        {/* <div> prevNumOfPlayers.current: {prevNumOfPlayers.current}</div> */}
        {/* <div> prevPlayers.current: {prevPlayers.current}</div> */}
        {/* add inputs = {AddInputs()} */}
        {/* <div>
          players.map:
          {players.map((persons: any, index: any): any => {
            <input
              // ref={prevNumOfPlayers}
              name="newInputs"
              key={persons.id}
              type="text"
              // defaultValue={persons}
              // onChange={onClickNumberOfPlayers}
            ></input>;
          })}
        </div> */}
        {/* {players} */}
        {/* <NumberOfPlayers /> */}
      </form>
      <div>
        Players:
        {/* {players} */}
        <br></br>
        addInputs = {addInputs()}
        {players.length ? (
          <div>
            {/* {players.map((persons: any, index: any): any => {
              <input
                // ref={prevPlayers}
                name="newInputs"
                key={index.id}
                type="text"
                // defaultValue={persons}
                // onChange={onClickNumberOfPlayers}
              ></input>;
            })} */}
            {/* 
      //@ts-ignore */}
            {addInputs({ players })}
            {/* <AddInputs /> */}
          </div>
        ) : null}
        {/* {players} */}
      </div>
    </>
  );
};
// const AddInputs = () => {
//   //@ts-ignore
//   const [players]: any = useContext(PlayerContext);
//   // const prevNumOfPlayers: any = useRef([]);
//   // useEffect((): any => {
//   //   prevNumOfPlayers.current = players;
//   // }, [players]);
//   console.log("What is this? = ", players);
//   return players.map((persons: any, index: any): any => {
//     <input
//       // ref={prevNumOfPlayers}
//       name="newInputs"
//       key={persons}
//       type="text"
//       // defaultValue={persons}
//       // onChange={onClickNumberOfPlayers}
//     ></input>;
//   });
// };

const Container = () => {
  // const [players]: any = useContext(PlayerContext);
  // const prevNumOfPlayers: any = useRef([]);
  // useEffect((): any => {
  //   prevNumOfPlayers.current = players;
  // }, [players]);
  return (
    <>
      <div>
        <AddPlayers>
          {/* <AddInputs
          // @ts-ignore
          // ref={prevNumOfPlayers}
          /> */}
          {/* <NumberOfPlayers /> */}
        </AddPlayers>
      </div>
    </>
  );
};

// const AddInputs = () => {
//   //@ts-ignore
//   const [players]: any = useContext(PlayerContext);
//   // const prevNumOfPlayers: any = useRef([]);
//   // useEffect((): any => {
//   //   prevNumOfPlayers.current = players;
//   // }, [players]);
//   console.log("What is this? = ", players);
//   return players.map((persons: any, index: any): any => {
//     <input
//       // ref={prevNumOfPlayers}
//       name="newInputs"
//       key={persons}
//       type="text"
//       // defaultValue={persons}
//       // onChange={onClickNumberOfPlayers}
//     ></input>;
//   });
// };

const NumberOfPlayers = (e: any): any => {
  const [players]: any = useContext(PlayerContext);
  // const prevNumOfPlayers: any = useRef([]);
  // useEffect((): any => {
  //   prevNumOfPlayers.current = players;
  // }, [players]);
  // console.log("What is AddInputs = ", AddInputs());
  // console.log("What is preNumOfPlayers? = ", prevNumOfPlayers.current);
  // console.log("What is players @NumberOfPlayers? = ", players);

  // const inputs = players.length ? (
  //   <div>
  //     {AddInputs()}
  //     <AddInputs />
  //   </div>
  // ) : null;
  return (
    <>
      <div>
        {/* Players: */}
        {/* {players} */}
        {/* {inputs} */}
        {players.length ? (
          <div>
            {/* {players} */}
            {/* 
      //@ts-ignore */}
            {/* {addInputs()} */}
            {/* <AddInputs /> */}
          </div>
        ) : null}
      </div>
    </>
  );
};

function UsePlayerState() {
  // console.log("you clicked = ", AddInputs());

  return (
    <>
      <NumberOfPlayersContextProvider>
        <PlayerContextProvider>
          <Container />
          <NumberOfPlayers />
          {/* <AddInputs /> */}
        </PlayerContextProvider>
      </NumberOfPlayersContextProvider>
    </>
  );
}

export default function Players() {
  return (
    <div>
      <UsePlayerState />
    </div>
  );
}
