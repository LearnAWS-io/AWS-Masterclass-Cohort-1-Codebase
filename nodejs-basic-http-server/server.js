const http = require("http");

const hostname = "";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 400;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
