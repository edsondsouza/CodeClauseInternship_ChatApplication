import WebSocket, { WebSocketServer } from "ws";

// listen to port
const wss = new WebSocketServer({ port: 3000 });

// when connected to WebSocketServer
wss.on("connection", function connection(ws) {
  // listen on wss, when message sent
  ws.on("message", function message(message) {
    const data = JSON.parse(message); // convert data from string to JS object

    // send data to clients in current server
    if (data.type === "message") {
      ws.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "message", data: data.data }));
        }
      });
    }
  });
});
