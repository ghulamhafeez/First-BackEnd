const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();
const subscribersRouter = require("./routes/subscribers");

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connect To Database"));
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(cors());
app.use("/subscribers", subscribersRouter);
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(3000, () => console.log("server started"));
