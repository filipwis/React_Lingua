const mongoose = require("mongoose");
require("../models/Word");

const Word = mongoose.model("words");

const word = {
  addWord: async (req, res) => {
    const newWordContent = {
      dictID: req.body.dictID,
      word: req.body.word,
      translation: req.body.translation,
    };

    try {
      const newWord = await new Word(newWordContent).save((err, word) => {
        res.send(word);
      });
      console.log("Word saved:", newWord);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  deleteWord: (req, res) => {
    Word.findByIdAndDelete(req.params.id)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      })
      .catch((err) => res.sendStatus(500));
  },
  deleteWordsOfDictionary: (req, res) => {
    Word.deleteMany({ dictID: req.query.dictID })
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      })
      .catch((err) => res.sendStatus(500));
  },
  getAllWordsOfOneDictionary: (req, res) => {
    console.log(req);
    Word.find({ dictID: req.query.dictID })
      .then((results) => res.send(results))
      .catch((err) => console.log(err));
  },
  updateWord: (req, res) => {
    const updatedWordContent = {
      dictID: req.body.dictID,
      word: req.body.word,
      translation: req.body.translation,
      known: true,
    };
    Word.findByIdAndUpdate(req.params.id, updatedWordContent)
      .then((updatedWord) => res.send(updatedWord))
      .catch((err) => console.log(err));
  },
  // getSingleDictionary: (req, res) => {
  //   Dictionary.findById(req.params.id)
  //     .then((results) => {
  //       if (!results) {
  //         res.send(404);
  //       } else {
  //         res.send(results);
  //       }
  //     })
  //     .catch((err) => res.send(404));
  // },
};

module.exports = word;
