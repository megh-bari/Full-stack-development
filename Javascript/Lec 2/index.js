// var age = 18

// if (true) {
//     console.log(age);

// }

// ****function scoped:****

// function example() {
//     var age = 20;
//     console.log( age)
// }

// example()
// console.log( age)

// possible but avoid reusing
// var x = 10
// var x = 20


// ***block scope:***

// ***not allowes***
// {
//   let a = 10;
// }
// console.log(a);

// ***allowed***
// {
//     let b = 20;
//     console.log(b);
// }

// let a = 10
// a = "megh"
// console.log(a);


// **const** : 

// const a = 10;
// a = 20; //throw error

// console.log(a);


// **Variable Naming Conventions**

// Rules:
// 1. Start with number,_, $ can be possible
// 2. no space
// 3.camelCase eg: isLoggedIn, ageOfStudent
// 4. meaningfull variable name 
// 5. don't use reserved keyword

// **DataType and Sizeof datatype:**
// . Primitive and Non-Primitive

// 1) Primitive DataTypes:
// 1 Number : 1,23,134..
// 2 string : "megh" "bari" //sequence of character
// 3 boolean : true (1) or false (0)
// undefined : let age 
// null  : empty space; eg. let age =""
// bigInt : 2 to the power of 53 (range) for large number 


let num = 18
console.log(num)

let fname = "megh"
console.log(typeof(fname));


