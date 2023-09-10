const ws = new WebSocket("ws://localhost:3000");

// handle incoming messages
ws.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  if (data.type === "message") {
    addMessage(data.data);
  }
});

// send message to server
function sendMessage() {
  const message = document.getElementById("message").value;

  // if no message
  if (!message) return false;

  // JavaScript object form to JSON-formated string
  //   ws.send(JSON.stringify({ type: "message", data: message }));

  addMessage(message);

  // clear the input field for next input
  document.getElementById("message").value = "";
}

// display the message
function addMessage(message) {
  const node = document.createElement("P");
  const text = document.createTextNode(message);

  node.appendChild(text); // add message in <p> tag
  node.classList.add("text-gray-700", "py-1"); // styling

  // append to <div> tag
  document.getElementById("chat").appendChild(node);
}
