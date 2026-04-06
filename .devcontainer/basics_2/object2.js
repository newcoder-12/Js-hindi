// const tindUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
tinderUser.name = "harry"

// console.log(tinderUser);

const obj1 = { 1 : "a" , 2 : "b"} 
const obj2 = { 3 : "c" , 4 : "d"} 
const obj3 = { 4 : "e" , 6 : "f"} 

// const obj3 = { obj1 , obj2 }    // ** problematic situation
//const obj4 = Object.assign({}, obj1 , obj2 , obj3)   // ** useage of object opeartor

const obj4 = { ...obj1 , ...obj2 , ...obj3}  // ** mostly we use this now days

console.log(obj4);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
 
