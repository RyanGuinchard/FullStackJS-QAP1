const http = require("http");

// Create a new HTTP server which takes in request and response
const server = http.createServer((req, res) => {
  // writing the response with code 200 for successful and the content type.
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

//Set up server listening on port 3000
server.listen(3000, () => {
  console.log("listening on port 3000");
});
