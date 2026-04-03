// const tindUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
tinderUser.name = "harry"

// console.log(tinderUser);

const obj1 = { 1 : "a" , 2 : "b"} 
const obj2 = { 3 : "c" , 4 : "d"} 

const obj3 = { obj1 , obj2 }    // ** problematic situation

console.log(obj3);
