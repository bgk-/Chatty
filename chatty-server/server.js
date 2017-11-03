const express = require("express");
const ws = require("ws");
// const SocketServer = require("ws").Server;
const uuidv4 = require("uuid/v4");
const RandomColour = require("randomcolor");
const PORT = 9001;

const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

const wss = new ws.Server({ server });

function broadcast(data, color) {
  const message = JSON.parse(data);
  message.key = uuidv4();
  message.color = color
  message.type = message.type.replace(/post/, "incoming");
  wss.clients.forEach(client => {
    client.send(JSON.stringify(message));
  });
}

function updateUserCount(users){
  wss.clients.forEach(client => {
    client.send(`{"users":"${users}"}`)
  })
}

wss.on("connection", socket => {
  const color = RandomColour();
  console.log("Client connected");
  updateUserCount(wss.clients.size)

  socket.on("message", data => {
    broadcast(data, color);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  socket.on("close", () => {
    console.log("Client disconnected");
    updateUserCount(wss.clients.size)
  });
});
