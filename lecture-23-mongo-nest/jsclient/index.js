let axios = require("axios");

axios
  .post("http://localhost:3000/users/", {
    name: "Anuj Garg",
    username: "keenwarrior",
    email: "anujgargcse@gamil.com",
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));
