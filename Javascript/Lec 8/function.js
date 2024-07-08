// why function is first class citizen 

// let greet = function(){
//     console.log("Namaste Duniya!")
// }

// // greet()

// function greetMe (greet, fullname){
//     console.log("Megh Bari")
//     greet()
// }

// greetMe(greet, "Megh")


// function solve(number) {
//     return function(number)
//     {
//         return number * number
//     }
// }

// let ans = solve(5)
// let finalAns = ans (10)
// console.log(finalAns)

const arr = [
    function(a,b){
        return a+b
    },
    function(a,b){
        return a-b
    },
    function(a,b){
        return a*b
    },
]

let first = arr[0]
let second = arr[1]
let third = arr[2]

let ans1 = first(1,2)
console.log(ans1)

let ans2 = second(2,2)
console.log(ans2)

let ans3 = third(1,4)
console.log(ans3)



let obj = {
    name: "megh",
    age: 18,
    location: "Mumbai",
    greet: ()=>{
        console.log("Hello Duniya")
    }
}
console.log(obj.name)
obj.greet()