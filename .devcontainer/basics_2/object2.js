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
// console.log(obj4);

//array types
const user = [
{
    id : 1 ,
    email : "nehal@123.com"
},
{
    id : 2 ,
    email : "nehal@1235.com"
},
{
    id : 3 ,
    email : "nehal@1234.com"
},

]


user[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    coursename : "js in hindi bhasa",
    price : "999" ,
    courseInstructor : "nehalKhan"
}

//Typing all time same instruction .. we define " const{} = "give value we want to extract from"

// const {courseInstructor} = course   normal structure 
const { courseInstructor : instructor} = course  // ** course destructure ** 
console.log(instructor);



// const navbar = ({company}) => {

// }
// navbar(company = "Nehal")