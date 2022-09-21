const express = require("express");
const next = require("next");
const mongo = require("mongodb").MongoClient;

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

// import clientPromise from "./db/conn.js";

// app.use(cors());

// app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    // clientPromise(function (err) {
    //   if (err) throw err;
    //   console.log(`> MONGO READY ON ${port}`);
    // });
    dbo.connectToServer(function (err) {
      if (err) throw err;
      console.log(`> MONGO READY ON ${port}`);
    });
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
