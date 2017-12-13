var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var taskSchema = new Schema({
  text: String,
  favorited: {
    type: Boolean,
    default: false
  }
}); 

var Task = mongoose.model("Task", taskSchema);


module.exports = Task;