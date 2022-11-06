const { MongoClient } = require("mongodb");
const express = require("express");
const next = require("next");
// const { bugsnag } = require('./config')
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// const apiRouter = require("./routes/record.js");

const uri = process.env.MONGODB_URI;
let db;

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  // server.use(bugsnag.middleware.requestHandler)

  // server.use("../server", apiRouter);

  // server.use(bugsnag.middleware.errorHandler)

  // server.get("*", async (req, res) => {
  //   // res.send("is this sending?")
  //   const allGames = db?.collection("game_types").find().toArray();
  //   console.log("Is allGames logging? > ", allGames);
  //   console.log("req.headers > ", req.headers);
  //   return handle(req, res);
  // });
  server.get("*/*", async (req, res) => {
    return handle(req, res);
  });

  server.get("../pages/api/gameTypes.tsx", async (req, res) => {
    const allGames = await db?.collection("game_types").find().toArray();
    console.log("req.headers for gameTypes > ", req.headers);
    res.json(allGames);
  });

  async function start() {
    const client = new MongoClient(
      "mongodb+srv://tlaforgia:I1IEUCVmR1gPcfzJ@botct-cluster.ay4qfp7.mongodb.net/game_data?retryWrites=true&w=majority"
    );
    await client.connect();
    db = client.db();
  }
  start();
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
