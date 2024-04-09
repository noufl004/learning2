const http=require('http');
const server =http.createServer((req,res)=>{

if(req.url==="/"){res.end("home page")
return;
}

if(req.url==="/about"){res.end("about page")
// blocking code

for(i=0;i<1000;i++){

    for(j=0;j<1000;j++){
console.log(`log ${i} ${j}`)
    
    }
}
return;}
res.end("error page")
return;
})
server.listen(5000,()=>{
console.log("server is listening")
})