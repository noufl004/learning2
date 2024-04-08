const os = require('os')

//infor about current use
const user=os.userInfo()
console.log(user)

// get system up time 

console.log(`this is the system up time - ${os.uptime()}`)