const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

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
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

io.on("connection", client => {
  console.log("user has connected");
  client.on("room", socket => {
    client.join(socket.room);
    console.log("user is joining", socket.room);
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
