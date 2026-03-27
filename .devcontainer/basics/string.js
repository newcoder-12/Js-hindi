const name = "nehalkhan"
const repoCount = 50 ;

// console.log(name + repoCount + "value");  // **Old way**

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Nehalkhan")

// console.log(gameName);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));

const newString = gameName.substring(0 , 3)
// console.log(newString);

const anotherString = gameName.slice(-8 , 4)
// console.log(anotherString);

const trimStringOne = "  nehal  "   // *** Trims the extra Space ***
// console.log(trimStringOne);
// console.log(trimStringOne.trim());

const url = "https://nehal.com/nehal%20khan"
// console.log(url.replace('%20' , '_'));

// console.log(url.includes('yashmin'));   // **false**
