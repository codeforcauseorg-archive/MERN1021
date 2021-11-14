const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");

const admin = require("firebase-admin");

var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let app = express();
app.use(cors());
app.use(bearerToken());
const PORT = 5050;

app.use(function (req, res, next) {
  if (req.token) {
    admin
      .auth()
      .verifyIdToken(req.token)
      .then((user) => {
        req.user = user;
        console.log(user);
      })
      .catch((error) => {
        // Handle error
      });
  }

  next();
});

app.get("/", function (req, res) {
  res.send("This is our simple code");
});

app.listen(PORT, function () {
  console.log(`listening to port ${PORT}`);
});
