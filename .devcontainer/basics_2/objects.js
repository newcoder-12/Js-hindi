// Singleton

//Object literals

// ** interview perspective
const mySym = Symbol("Key1")

const JsUser = {
    name : "Nehal",
    age : 25 ,
    mySym : "Key-mine",  // here we are not using actual symbol but just an object : string
    [mySym] : "key2",
    location : "Jaipur",
    email : "Nehal@123gmail.com",
    isLoggedIn : false, 
}

// console.log(JsUser.email);  // one way
// console.log(JsUser["email"]);  // second way
// console.log(JsUser["name"])
// console.log(JsUser[mySym])   // this will give the symbol value

JsUser.email = "nehal@chatgpt.com"
// Object.freeze(JsUser)       // ** freezes the changes
JsUser.email = "nehal@claude.com"
// console.log(jsUser)

JsUser.greeting = function() {
    // console.log("Hello everyone");
}
// console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    // console.log(`Hello JsUser ${this.name}`);
}
// console.log(JsUser.greetingTwo());


