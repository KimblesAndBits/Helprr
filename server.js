const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const Sequelize = require('sequelize');
const bodyParser = require("body-parser");
const Op = Sequelize.Op;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API routes
app.post("/api/login", (req, res) => {
  let email = req.body.email;
  db.User.findOne({
    where: { email: email }
  }).then((user, err) => {
    if (err) throw err;
    res.send(user);
  });
});

app.post("/api/register", (req, res) => {
  let userInfo = req.body
  db.User.findOrCreate({
    where: {[Op.or]: [{ email: userInfo.email }, { user_name: userInfo.user_name}]}, defaults: { ...userInfo }
  }).spread((user, created) => {
    if (created) {
      res.send(user);
    } else {
      res.send("That email or username is already in use.");
    }
  })
});

// End of API routes


let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s.",
      PORT
    );
  });
});