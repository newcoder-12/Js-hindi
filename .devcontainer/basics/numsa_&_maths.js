//For learning purpose uncheck all console.log simultaneously and learn

const score = 400  //This is also a numberr as per js

const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // ** mostly used brings value to exact decimal**

const hundred = 1000000  //This is difficult sometimes to read 
console.log(hundred.toLocaleString('en-IN')); // ** converts to indian standard reading value **


//                  ************ Maths **************

console.log(Math);
// console.log(Math.abs(-4));      
// console.log(Math.round(4.6));   // * rounds to nearest number **
// console.log(Math.ceil(4.2));    // * ceil ( ceiling only top number ) to nearest number **
// console.log(Math.floor(4.9));   // * floor (floors to below lowest number ) ** 
// console.log(Math.min(4, 3, 8 , 9));
// console.log(Math.max(4, 3, 8 , 9));

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

