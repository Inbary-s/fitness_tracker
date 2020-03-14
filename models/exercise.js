const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
 exercises: {
     type: Array,
     default: []
 },
  date: {
    type: Date,
    default: Date.now
  }
});
const Exercise = mongoose.model("exercise", exerciseSchema);
module.exports = Exercise;