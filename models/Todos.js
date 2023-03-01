const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todos", todosSchema);
