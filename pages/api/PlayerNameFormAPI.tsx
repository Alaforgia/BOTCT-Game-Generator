import React from "react";

export default function PlayerNameFormAPI(req: any, res: any) {
  const body = req.body;
  console.log("body => ", body);

  res.status(200).json({ data: `${body.first}` });

  return <div>PlayerNameFormAPI</div>;
}
