const express = require("express");
const router = express.Router();
// const controllers = require('../controllers/index')

// const routes = [""];

router.get("/", (req, res) => {
  const dbConnect = dbo.getDB();
  res.status(200).send("This is getting the game_data");

  dbConnect
    .collection("game_types")
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching game_type data, but it is getting here!");
      } else {
        res.json(result);
      }
    });
});
// routes.forEach((routeName) => {
// const childRouter = express.Router();
// router.use(`../${routeName}`, childRouter);
// require(`../${routeName}`)({ router: childRouter, controllers })
// });
router.get("*", function (req, res) {
  res.send("Is this showing up? (record.js)");
  console.log("What is res/req = ", res, req);
  res.status(400).json({ error: "Not a valid endpoint" });
});
module.exports = router;
