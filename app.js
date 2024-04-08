const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welocome to our home page');
        return
    }
    if(req.url==='/about'){
res.end('this about history')
return
    }

res.end(`<h1>we can't find the page you are looking for</h1>
<a href='/'>go back to home page</a>`)
return
})

server.listen(5000)