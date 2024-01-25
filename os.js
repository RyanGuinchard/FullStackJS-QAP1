const os = require('os');

// Get information about the operating system
console.log(`OS Type: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Total Memory: ${os.totalmem()}`);
