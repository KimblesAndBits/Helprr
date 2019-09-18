const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// API routes
app.get("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  db.User.findOne({
    where: {user_name: username}
  }).then((data, err) => {
    if (err) throw err;
    if (data.password === password) {
      res.json(data)
    } else {
      res.json("No such user.");
    }
  });
});

app.get("/register", (req, res) => {
  let userInfo = req.body
  db.User.findOrCreate({
    where: {email: userInfo.email}, defaults: {userInfo}
  }).spread((user, created) => {
    if (created) {
      res.json(user);
    } else {
      res.json("That email already belongs to an account.");
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
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s.",
      PORT
    );
  });
});