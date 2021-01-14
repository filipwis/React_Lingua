const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DictionarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

mongoose.model("dictionaries", DictionarySchema);
