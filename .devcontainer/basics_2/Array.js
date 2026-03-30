//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);

//Arrays method   //-- uncheck each method and try 

// myArr.push(6)  // **adds value at last
// myArr.push(7)
// myArr.pop()    // **removes last value 
// myArr.unshift(8)  // **adds value to the start 
// myArr.shift()  // **removes value from the start 

// console.log(myArr.includes(5));   //checks for the value inside

const newArr = myArr.join()   //converts value to string after joining
//console.log(newArr);
// console.log(myArr);

// ---------------- Slice and Splice ----------------------

console.log("A" , myArr);
const myn1 = myArr.slice(1 , 3)  //doesnt affect main array and just slice 1 - 3
console.log(myn1);

console.log("B" , myArr);
const myn2 =myArr.splice(1 , 3) //affects the main array and changes it totally 
console.log(myn2);

//This is the amin difference between slice and splice 
/* One changes The totall array while other doesnt affect the array just slices the 
   desried part from it
   
   The last console you may see the whole arrays 1-3 has been removed totally */

console.log("C" , myArr);



