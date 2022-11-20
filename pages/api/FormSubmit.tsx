import React from "react";

export default function FormSubmit() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      first: event.target.first.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "../api/PlayerNameFormAPI";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Player Name</label>
        <input type="text" id="first" required />
        
        <input type="submit" />
      </form>
    </>
  );
}
