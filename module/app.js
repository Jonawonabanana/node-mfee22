let car = require("./car");

console.log(car.color);
car.color = "blue";
console.log(car.color);
car.setName("AAA")
car.showName();


// 模組來源：
//1 內建的: fs  require("fs")
//2 第三方：mysql2, moment, axois, dotenv,.... fs  require("mysql")
//3 自己開發
