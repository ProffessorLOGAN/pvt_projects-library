
const validator = require('validator');

const valid = validator.isEmail("keshritansen@gmail.com");
console.log(valid);

const notvalid = validator.isEmail("keshritansen@gmailcom");
console.log(notvalid);

