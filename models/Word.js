const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  dictID: {
    type: String,
    required: true,
  },
  word: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
  known: {
    type: Boolean,
    default: false,
  },
});

mongoose.model("words", WordSchema);
