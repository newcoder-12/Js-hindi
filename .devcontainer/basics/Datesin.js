let date = new Date()
//console.log(date.toString());
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

// let createMyDate = new Date(2023 , 0 , 23)
// let createMyDate = new Date(2023 , 0 , 23 , 5 , 0) // in this format jan starts from 0
let createMyDate = new Date("2026-01-11")
// console.log(createMyDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(createMyDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

newDate.toLocaleString(`default`)
