const http=require('http');

const {readFile}=require('fs')
const {createReadStream}=require('fs')



const server=http.createServer((req,res)=>{

    const stream=createReadStream("./content/bigFile.txt",'utf8')
    stream.on('open', (data)=>{
        stream.pipe(res)
    })
    stream.on('error', (err)=>{
        res.end(err)
    })
});

// const text=readFile('./content/bigFile.txt','utf8',(err,response)=>{
//     server.on('request',(req,res)=>{

//         res.end(response)
//         })
// })




server.listen('5000')