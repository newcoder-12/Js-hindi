let a = 300

{
    let a = 50
    const b = 12
    // console.log("INNER :" , a);
}

// console.log("OUTER : ", a);

function one(){
    const username = "hitesh"

    function two(){
        const website = "NehalWEb"
        // console.log(username);
    }
    two()
    // console.log(website);
}
one()

// +++++++++++++++++ intresting +++++++++++++++++++++++

function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
return num + 2
}
addTwo(6)

