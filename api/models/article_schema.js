const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is required!']
  },

  body: {
    type: String,
    required: [true, 'body is required!']
  },

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Articles', articleSchema);