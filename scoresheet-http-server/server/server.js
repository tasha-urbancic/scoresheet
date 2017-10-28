const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const queries = require("../queries");
const routes = require("./routes");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("scoresheet-app/build"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

io.on("connection", client => {
  console.log("user has connected");
  client.on("room", socket => {
    client.join(socket.room);
    console.log("user is joining", socket.room);
  });
  client.on("new input added", socket => {
    console.log("socket has received new input from a user");
    client.broadcast.to(socket.room).emit("sending new state");
  });
  client.on("leave", socket => {
    client.leave(socket.room);
    console.log("user is leaving", socket.room);
  });
  client.on("disconnect", () => {
    console.log("user has disconnected");
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../index.html"));
});

http.listen(PORT, () => {
  console.log("HTTP Server listening on port " + PORT);
});
