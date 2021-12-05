let axios = require("axios");

let id = "61ace3128ab7a03df4265e28"

axios
  .patch("http://localhost:3000/users/" + id, {
    name: "Anuj Garg",
    username: "keenwarrior",
    email: "anuj@codeforcause.org",
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));
