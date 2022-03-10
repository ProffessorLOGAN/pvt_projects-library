const fs = require('fs');
const data = {
    name:"tansen keshri",
    age:21,
    email:"keshritansen@gmail.com",
}

// const jsonData = JSON.stringify(data);
// console.log(jsonData);

// const objdata = JSON.parse(jsonData);
// console.log(objdata);
// console.log(objdata.name);
// console.log(objdata.age);
// console.log(objdata.email);



// fs.writeFile("data.json",jsonfile, (err,data) => {
//     console.log('done creating json file');
    
// }); 

fs.readFile("data.json","utf-8", (err,data) => {
    const jsonfile = JSON.parse(data);
    console.log(jsonfile);
    console.log(data);
});

