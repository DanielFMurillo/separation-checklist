var mongoose = require("mongoose");

var Schema = mongoose.Schema;
/*
var taskSchema = new Schema({
  text: String,
  favorited: {
    type: Boolean,
    default: false
  }
}); */

var Task = mongoose.model("Quote", quoteSchema);

module.exports = Task;