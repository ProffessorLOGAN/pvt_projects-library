const os = require('os');

const architecture = os.arch();
console.log(architecture);

const freememory =os.freemem();
console.log(`${freememory/1024/1024/1024}`);

const platform =os.platform();
console.log(platform);

const totalmemory = os.totalmem();
console.log(`${totalmemory/1024/1024/1024}`);

const ostype = os.type();
console.log(ostype);

const user_info = os.userInfo();
console.log(user_info);