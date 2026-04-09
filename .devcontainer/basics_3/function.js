// function addTwoNumber(num1 , num2) {
  
// console.log(num1 + num2);

// }
function addTwoNumber(num1 , num2) {

let result = num1 + num2
return result
//unless and until we return a value , we cannot store it in a variable 
}

const result = addTwoNumber( 3 , 5 )
// console.log("Result" , result);


function loginUserMessage(username) {
    if(!username){
        console.log("please enter your usename");
        return
    }
    return `${username} just logged in`
}

loginUserMessage("Nehal") // wont get print cause we havent called it , this is were begginer makes mistakes
console.log(loginUserMessage())
