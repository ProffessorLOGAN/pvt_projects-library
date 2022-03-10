const path = require('path');


console.log(path.dirname("F:/projects/NodeJS/path_node_module/path_node.js"));

console.log(path.extname("F:/projects/NodeJS/path_node_module/path_node.js"));

console.log(path.basename("F:/projects/NodeJS/path_node_module/path_node.js"));

console.log(path.parse("F:/projects/NodeJS/path_node_module/path_node.js"));

const mod = path.parse("F:/projects/NodeJS/path_node_module/path_node.js");

console.log(mod.name);
console.log(mod.ext);
console.log(mod.base);
console.log(mod.dir);
