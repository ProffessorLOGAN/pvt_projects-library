const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on('/', (req, res) => {
  // var fs = require("fs");
  // fs.readFile("data.txt", (err, data) => {
  //   if (err) return console.error(err);
  // });
  const rstream = fs.createReadStream('data.txt');
});

server.listen(3000,'127.0.0.1');