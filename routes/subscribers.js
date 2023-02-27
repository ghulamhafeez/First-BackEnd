const express = require("express");
const router = express.Router("express");

const subscribers = [
  {
    id: 1,
    name: "Usman",
  },
  {
    id: 2,
    name: "Danish",
  },
];

router.get("/", (req, res) => {
  res.json(subscribers);
});

// // getting One
router.get("/:id", (req, res) => {
  const find = subscribers.find((x) => x.id === Number(req.params.id));
  console.log("find", find);
  res.send(find);
});

// Creating One
router.post("/", (req, res) => {
  let data = {
    id: 3,
    name: "Ali",
  };
  const newData = subscribers.push(data);
  res.json(subscribers);
});

// // Updateing One
// router.patch("/", (req, res) => {});

// Deleting One
router.delete("/:id", (req, res) => {
  subscribers.filter((x) => x.id !== req.params.id);
});

module.exports = router;
