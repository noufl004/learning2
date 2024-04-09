const eventEmiter=require('events');
const customeEmiter=new eventEmiter();

customeEmiter.on('response',(name,age)=>{

console.log(`data recieved ${name} , ${age}`)
})


customeEmiter.emit('response','john',28)