const http = require("http");
const socketio = require("socket.io");

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", function (payload) {
    io.sockets.emit("broadcast", payload);
  });
});

server.listen(5000);
