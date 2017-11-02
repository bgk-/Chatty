const express = require("express");
const ws = require("ws");
const SocketServer = require("ws").Server;
const uuidv4 = require("uuid/v4");

const PORT = 9001;

const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

const wss = new SocketServer({ server });

function notification(content) {
  return JSON.stringify({
    key: uuidv4(),
    type: "incomingNotification",
    content
  });
}

function broadcast(data) {
  const returnData = JSON.parse(data);
  wss.clients.forEach(client => {
    if (returnData.type === "postNotification") {
      client.send(notification(returnData.content));
    } else if (client.readyState === ws.OPEN) {
      returnData.key = uuidv4();
      client.send(JSON.stringify(returnData));
    }
  });
}

wss.on("connection", socket => {
  console.log("Client connected");
  broadcast(notification("A new user has joined the channel."));
  socket.on("message", broadcast);

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  socket.on("close", () => {
    broadcast(notification("A user has left the channel."));
    console.log("Client disconnected");
  });
});
