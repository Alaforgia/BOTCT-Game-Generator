const express = require("express");
const next = require("next");
// const { bugsnag } = require('./config')
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const apiRouter = require("./routes/record.js");

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  // server.use(bugsnag.middleware.requestHandler)

  server.use("../server", apiRouter);

  // server.use(bugsnag.middleware.errorHandler)

  server.get("*", (req, res) => {
    res.send("is this sending?")
    return handle(req, res);
  });


  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
