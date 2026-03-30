const marvel_heroes = ["thor" , "Ironman" , "Spiderman"]
const Dc_heroes = ["SUperman" , "Flash" , "Batman"]

// marvel_heroes.push(Dc_heroes)
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(Dc_heroes)  // --concat creates new array 
// console.log(all_heroes);

// ---- mostly people use this process
const all_new_heroes = [...marvel_heroes , ...Dc_heroes]
// console.log(all_new_heroes);

// --- what if we have array inside array inside array and we want a flat value ???

const all_array = [1, 2, 3, 4, [5 , 6, 7, [8, 9, 10]]]
// console.log(all_array);

const new_all_array = all_array.flat(Infinity)
// console.log(new_all_array);

// ---How to make array from strings or objects anything
console.log(Array.isArray("nehal"));  // **checks if value is an array
console.log(Array.from("nehal"));    // **from is used to create array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2, score3));  // **of is used when set of array is needed


