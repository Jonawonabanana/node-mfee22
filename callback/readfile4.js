// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。

const { readFile } = require("fs/promises");

(async() => {

  try {
    let result1 = await readFile("test.txt", "utf-8");
    console.log(`${result1}`);  
    
  } catch (err) {
    console.error(err);
  }

})();



