const { readFile } = require("fs");
const {createReadStream}=require('fs')

const stream=createReadStream("./content/bigFile.txt")
  
stream.on('data',(response)=>{
console.log(response)

})
stream.on('error',(error)=>{
    console.log(error)
    
    })

  // readFile("./content/bigFile.txt",  (err,result)=>{

    //     console.log(result)
//     // }
//   );