const express = require("express");
const { MongoDBNamespace } = require("mongodb");
const next = require("next");
const mongo = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGODB_URI;

require("dotenv").config({ path: "../server/.env" });

const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
const app = express();
// const handle = app.getRequestHandler();

const dbo = require("./db/conn");
console.log("dbo is =", dbo);
app.use(express.json());
let mainRoutes = require("./routes/record");
app.use(mainRoutes);

app.get("/:id", (req, res) => {
  res.status(500).send(req.body);
  console.log("req.body = ", req.body);
  console.log("req.params = ", req.params);
  const queryParams = req.params.id;
  app.render(queryParams);
  // return handle(req, res);
});

dbo.connectToServer(function (err) {
  if (err) throw err;
});

app.listen(PORT, (err) => {
  console.log(`ready at http://localhost:${PORT}`);
});
// app.prepare().then(() => {
//   // express code here
//   // app.use(bodyParser.json());
//   // app.use(bodyParser.urlencoded({ extended: true }));
//   // app.use(mainRoutes);
//   // const app = express;

// });
module.exports = (app) => {};
