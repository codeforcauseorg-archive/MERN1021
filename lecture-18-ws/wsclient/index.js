let ioclient = require("socket.io-client");

let socket = ioclient.connect("http://localhost:3000/");

socket.on("connect", function () {
  console.log("Connected to server");
});

socket.on("tap", function(payload){
    console.log(payload);
})