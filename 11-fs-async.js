const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    //console.log(result)
    const first = result;
    readFile("./content/first.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const second = result;
        writeFile(
          "./content/resultAsync.txt",
          `here is my result ${first},${second}`,
          { flag: "a" },
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
          }
        );
      }
    });
  }
});
// const second=readFileSync('./content/second.txt','utf8')
// console.log(first,second)
// writeFileSync('./content/resultSync.txt',`here is my result ${first},${second}`,{flag:'a'})
