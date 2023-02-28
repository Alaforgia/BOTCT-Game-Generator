import clientPromise from ".././server/mongodb";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PlayerNumberSelect from "./PlayerNumberSelect";

function ChooseClasses({ games }: any) {
  const router = useRouter();
  const { maxNum } = router.query;
  const [selectedClasses, setSelectedClasses] = useState<string[]>(["Imp"]);
  const [impSelected, setImpSelected] = useState(false);
  const [minionSelected, setMinionSelected] = useState(false);
  const [showMinionError, setShowMinionError] = useState(true);

  useEffect(() => {
    // Check if "Imp" and at least one "Minion" class are initially selected
    const initialImpSelected = selectedClasses.includes("Imp");
    const initialMinionSelected = selectedClasses.some((class_name) =>
      ["Poisoner", "Baron", "Spy", "Scarlet Woman"].some((minionClass) => class_name.includes(minionClass))
    );
    setImpSelected(initialImpSelected);
    setMinionSelected(initialMinionSelected);
    setShowMinionError(!initialMinionSelected);
  }, [selectedClasses]);

  useEffect(() => {
    // Check if at least one "Minion" class is selected and update showMinionError state
    const minionSelected = selectedClasses.some((class_name) =>
      ["Poisoner", "Baron", "Spy", "Scarlet Woman"].some((minionClass) => class_name.includes(minionClass))
    );
    setShowMinionError(!minionSelected);
  }, [selectedClasses]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if both requirements are met before continuing
    if (impSelected && minionSelected) {
      // TODO: handle form submission
    }
  };

  const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const className = event.target.value;
    const isChecked = event.target.checked;
    // Update selected classes state
    if (isChecked) {
      setSelectedClasses((prevSelected) => [...prevSelected, className]);
    } else {
      setSelectedClasses((prevSelected) => prevSelected.filter((c) => c !== className));
    }
    // Update Imp and Minion requirements state
    if (className === "Imp") {
      setImpSelected(isChecked);
    } else if (["Poisoner", "Baron", "Spy", "Scarlet Woman"].some((minionClass) => className.includes(minionClass))) {
      setMinionSelected(isChecked);
    }
  };
  console.log("maxNum =", maxNum);

  return (
    <form onSubmit={handleSubmit}>
      {games?.map((game: any, classes: any, i: any) => {
        return (
          <div key={game._id}>
            <h1>{game?.name}</h1>
            {Object.entries(game?.classes[0]).map((game_class: any) => {
              return (
                <div key={game_class[0]}>
                  <h2>{game_class[0]}</h2>
                  {game_class[1].map((sub_class: any) => {
                    return (
                      <div key={sub_class?.class_name}>
                        <label>
                          <input
                            type="checkbox"
                            value={sub_class?.class_name}
                            onChange={handleClassChange}
                            checked={selectedClasses.includes(sub_class?.class_name)}
                          />
                          {sub_class?.class_name}
                        </label>
                        <p>{sub_class?.class_ability}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
      {showMinionError && <h1>You must select at least one Minion class</h1>}
      <button type="submit" disabled={!impSelected || !minionSelected}>
        Submit
      </button>
    </form>
  );
}

export default ChooseClasses;

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
