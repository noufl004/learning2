const { error } = require("console");
const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const writeText = (path, first, second) => {
  writeFile(
    path,
    `here is my new async await result ${first},${second}`,
    { flag: "a" },
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
};

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt", "utf8");
    console.log(first, second);
    await writeText("./content/resultAsync.txt", first, second);
  } catch (error) {
    console.log(`async await error is ${error}`);
  }
};
start();
//   await getText("./content/first.txt")
// .then((result) => {
//   console.log(`this is result ${result}`);
// })
// .catch((error) => {
//   console.log(`error is hhh ${error}`);
// });
