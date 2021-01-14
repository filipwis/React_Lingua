const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const routes = require("./routes");
const User = require("./models/User");

mongoose.set("useUnifiedTopology", true);

const PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(
  session({
    secret: "ligua",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.NODE_DATABASE, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", () => {
  console.log("Connected to DB!");
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
  app.use("/api", routes);
});
