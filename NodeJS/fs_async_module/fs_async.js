const fs = require('fs');

fs.writeFile('data.txt','hello my name is tansen', (err) =>{
    console.log('data file created');
});

fs.appendFile('data.txt',"and i love to play pc games", (err) =>{
    console.log('file updated ');
});

fs.readFile('data.txt',(err,data)=> {
console.log(data);
});

fs.readFile('data.txt',"utf8",(err,data) => {
    console.log(data);
});