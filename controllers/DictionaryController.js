const mongoose = require("mongoose");
require("../models/Dictionary");

const Dictionary = mongoose.model("dictionaries");

const dictionary = {
  addDictionary: async (req, res) => {
    const newDictionaryContent = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      userID: req.body.userID,
    };

    try {
      const newDictionary = await new Dictionary(newDictionaryContent).save(
        (err, dictionary) => {
          res.send(dictionary);
        }
      );
      console.log("Dictionary saved:", newDictionary);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getAllDictionaries: (req, res) => {
    console.log(req);
    Dictionary.find({ userID: req.query.userID })
      .then((results) => res.send(results))
      .catch((err) => console.log(err));
  },
  getSingleDictionary: (req, res) => {
    Dictionary.findById(req.params.id)
      .then((results) => {
        if (!results) {
          res.send(404);
        } else {
          res.send(results);
        }
      })
      .catch((err) => res.send(404));
  },
  updateDictionary: (req, res) => {
    const updatedDictionaryContent = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      userID: req.body.userID,
      content: req.body.content,
    };
    Dictionary.findByIdAndUpdate(req.params.id, updatedDictionaryContent)
      .then((updatedDictionary) => res.send(updatedDictionary))
      .catch((err) => console.log(err));
  },
  deleteDictionary: (req, res) => {
    Dictionary.findByIdAndDelete(req.params.id)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      })
      .catch((err) => res.sendStatus(500));
  },
};

module.exports = dictionary;
