const http=require('http');


const server=http.createServer()

server.on('request',(req,res)=>{

res.end('welcome page')
})


server.listen(5001)