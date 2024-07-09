// * Variable Scope

//** global scope : kahi par bhi utilize kr sakte hai
var age = 18; //! we avoid

// console.log(age);

// {
//   console.log(age);
// }

// if (true) {
//   console.log(age);
// }

// ** function scope : 

function helloDuniya() {
    const name = "earth"
    console.log(`Hello Duniya,${name}`)
}

helloDuniya()


// * Block scope:

// !!! var is global scope
{
    var height = 100
}

console.log(height)

// !!! let and var is block scope 
// {
//     let name = "megh"
// }

// console.log(name)