// promise version 
//Promise 物件代表一個即將完成或失敗的非同步操作，以及它所產生的值．

const { readFile } = require("fs");


let readfilePromise = new Promise ((resolve, reject) => {
  readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
});


console.log(readfilePromise);
readfilePromise
.then((result) => {
  // 這邊接住 resolve
  console.log( `這是promise 的 result ${result}`);
})
.catch((err) => {
  console.error("這是promise 的 catch", err);
});

