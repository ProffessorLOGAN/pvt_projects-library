const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello Tansen welcome to home page ");
  } else if (req.url == "/about") {
    res.end("hello Tansen welcome to about page ");
  } else if (req.url == "/contact") {
    res.end("hello Tansen welcome to contact page");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error . Page doesn't exists <h1>");
  }
});

server.listen("3000", "localhost", () => {
  console.log("hello server");
});
