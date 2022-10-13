// import { MongoClient } from "mongodb";
// import { env } from "process";

// declare global {
//   var _mongoClientPromise: Promise<MongoClient>;
// }

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid environment variable: "MONGODB_URI"');
// }

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise: Promise<MongoClient>;

// if (!process.env.MONGODB_URI) {
//   console.log("Connection is working");
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;

require("dotenv").config();
const { MongoClient } = require("mongodb");
const connectionString = process.env.MONGODB_URI;
const client = new MongoClient("mongodb://localhost:3000/connectionString", connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // tls: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (err) {
    client.connect(err, (db) => {
      // Verify we got a good "db" object

      dbConnection = db.db("game_data").collection("game_types");
      console.log("Successfully connected to MongoDB.");

      // return err;
    });
  },

  getDb: function () {
    return dbConnection;
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
// export default {};
