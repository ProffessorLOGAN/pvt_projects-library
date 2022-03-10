const fs = require('fs');

fs.mkdirSync('node');
fs.writeFileSync("node/node.txt","my name is tansen");
fs.writeFileSync("node/node.txt","my name is tansen keshri");
fs.appendFileSync("node/node.txt"," and i live in chaibasa ");
const data = fs.readFileSync("node/node.txt","utf8");
console.log(data);

fs.renameSync("node_file.txt","node/node.txt");
fs.unlinkSync("node/node.txt");
fs.rmdirSync("node");