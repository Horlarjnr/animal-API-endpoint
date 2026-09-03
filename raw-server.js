import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Motin!");
});

server.listen(7000, () => {
  console.log("Server is listening on http://localhost:7000");
});
