const os = require('os');

console.log(os.userInfo());

console.log(`This is the time:- ${os.uptime()}`)

const osInfo = {
    name: os.type(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    release: os.release()
}

console.log(osInfo);