const express = require("express");
const { MongoDBNamespace } = require("mongodb");
const next = require("next");
const mongo = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGODB_URI;

nextApp.prepare().then(() => {
  // express code here
  const app = express()
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', require('./routes/record')) 
  app.get('*', (req,res) => {
      return handle(req,res) // for all the react stuff
  })
  app.listen(PORT, err => {
      if (err) throw err;
      console.log(`ready at http://localhost:${PORT}`)
  })
})
