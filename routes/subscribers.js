const express = require("express");
const router = express.Router("express");
const Subscriber = require("../models/subscriber");

router.get("/", async (req, res) => {
  const dete = await Subscriber.find({});
  console.log("dete", dete);
});

// // getting One
router.get("/:id", async (req, res) => {
  const Find = await Subscriber.findById(req.params.id);
});

// Creating One
router.post("/", (req, res) => {
  const data = { name: "Ghulam" };
  var myData = new Subscriber(data);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

// // Updateing One
// router.patch("/", (req, res) => {});

// Deleting One
router.delete("/", async (req, res) => {
  // subscribers.filter((x) => x.id !== req.params.id);
  const deleteOne = await Subscriber.deleteOne({ name: "Ghulam" });
  console.log("deleteOne", deleteOne);
});

module.exports = router;
