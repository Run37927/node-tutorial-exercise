const os = require('os') //built in module doesn't need ./

// info about current user
const user = os.userInfo();
// console.log(user);


// method returns the system uptime in seconds
// console.log(`The system uptime is: ${os.uptime() / 3600} hours`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

// console.log(currentOS);