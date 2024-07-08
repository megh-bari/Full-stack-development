//variable and function hoisting && function call

// function hoisting
// function sayMyName(myname) {
//     console.log(myname)
// }

// sayMyName("Megh")

// variable hoisting only var keyword with
// console.log(age) // undefined
// var age = 25
// console.log(age)

// console.log(a) // Impossible
// let and const are not variable hoisting
let a = 10;
console.log(a);

// username("megh") // cannot access
const username = (myname) =>{
    console.log(myname)
}

username("megh")

// class human {
    
// }

// const obj1 = new human()