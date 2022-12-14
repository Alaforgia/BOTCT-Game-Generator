const express = require("express");
const router = express.Router();

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
// const dbo = require("../db/conn");

// This section will help you get a list of all the documents.
const recordRoutes = express.Router();
recordRoutes.route("/list").get(async function (req, res) {
  let dbConnect = dbo.getDb();

  dbConnect
    .collection("game_types")
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new document.
// recordRoutes.route("/").post(function (req, res) {
//   const dbConnect = dbo.getDb();
//   const matchDocument = {
//     game_id: req.body.id,
//     last_modified: new Date(),
//     session_id: req.body.session_id,
//     direction: req.body.direction
//   };

//   dbConnect
//     .collection("matches")
//     .insertOne(matchDocument, function (err, result) {
//       if (err) {
//         res.status(400).send("Error inserting matches!");
//       } else {
//         console.log(`Added a new match with id ${result.insertedId}`);
//         res.status(204).send();
//       }
//     });
// });

// // This section will help you update a document by id.
// recordRoutes.route("/").post(function (req, res) {
//   const dbConnect = dbo.getDb();
//   const gameQuery = { _id: req.body.id };
//   const updates = {
//     $inc: {
//       likes: 1
//     }
//   };

//   dbConnect
//     .collection("listingsAndReviews")
//     .updateOne(listingQuery, updates, function (err, _result) {
//       if (err) {
//         res.status(400).send(`Error updating likes on listing with id ${listingQuery.id}!`);
//       } else {
//         console.log("1 document updated");
//       }
//     });
// });

// // This section will help you delete a record.
// recordRoutes.route("/listings/delete/:id").delete((req, res) => {
//   const dbConnect = dbo.getDb();
//   const listingQuery = { listing_id: req.body.id };

//   dbConnect
//     .collection("listingsAndReviews")
//     .deleteOne(listingQuery, function (err, _result) {
//       if (err) {
//         res.status(400).send(`Error deleting listing with id ${listingQuery.listing_id}!`);
//       } else {
//         console.log("1 document deleted");
//       }
//     });
// });

module.exports = recordRoutes;
