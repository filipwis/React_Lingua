const express = require("express");
const { dictionary, words, user } = require("../controllers");

const router = express.Router();

router.post("/user/login", user.userLogin);
router.post("/user/logout", user.userLogout);
router.post("/user/register", user.userRegister);

router.get("/dictionaries", dictionary.getAllDictionaries);

router.post("/dictionary", dictionary.addDictionary);

router.get("/dictionary/:id", dictionary.getSingleDictionary);
router.put("/dictionary/:id", dictionary.updateDictionary);
router.delete("/dictionary/:id", dictionary.deleteDictionary);

router.get("/words", words.getAllWordsOfOneDictionary);
router.post("/word", words.addWord);
router.put("/word/:id", words.updateWord);
router.delete("/word/:id", words.deleteWord);
router.delete("/deleteWord", words.deleteWordsOfDictionary);

module.exports = router;
