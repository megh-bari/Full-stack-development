// array => collection of itmes/elements

// reference type => object, array, function
// stack memory => primitive dataTypes
// heap memory => reference type

// creating array
let arr = [1, 2, 3, 4, 5, "Megh"];

// console.log(arr)

// array constructor

let arr1 = new Array("Megh", 1, true);
// console.log(arr1);
// console.log(arr1[0]);

// built-in-method

const arry = [1, 2, 3, 4, 5, 6];

// arry.push("megh") // insert at the end
// arry.pop("megh") // remove last element
// arry.shift() // remove start element
// arry.unshift('Megh')   // add value in start

// console.log(arry.slice(1, 3)); // remove part

// console.log(arry.splice(1,0, 'Megh')) // content changed, delete, insert, replace

// console.log(arry);

let anotherArr = [10, 20, 30];

// let ans = anotherArr.map((number)=>{
//     return number*number
// })

// console.log(ans)

// anotherArr.map((Number, index)=>{
//     console.log(Number);
//     console.log(index);
// })

// const evenOdd = [10,11,22,34,97,78,23]

// let evenArr = evenOdd.filter((number)=>{
//     if (number%2==0) {
//         return true
//     } else {
//        return false
//     }
// })

// console.log(evenArr)

// let newArr = [1,2,3,"Megh","Yash", true, undefined, null]
// let str = newArr.filter((value)=>{
//     return typeof(value) == "string"
// })

// console.log(str)

// let anotherArry = [10, 20, 30, 40, 50];

// let findReduce = anotherArry.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);

// console.log(findReduce);

// let findSort = [1,6,9,3,7,2]

// findSort.sort()
// findSort.reverse()

// console.log(findSort)

// const numbers = [4, 9, 16, 25, 29];

// const found = numbers.find(number => number > 10);

// console.log(found); // Output: 16

// let arrry = [10, 20, 30, 40, 50];

// let length = arrry.length;
// console.log("Lenght", length);

// // traditional for loop

// for (let index = 0; index < arrry.length; index++) {
//   console.log(arrry[index]);
// }

// // arrry.forEach((value,index)=>{
// //     console.log("Number:", value, "Index:", index)
// // })

let newArr = [10,20,30,40.50]

for (const iterator of newArr) {
    console.log(iterator)
}

let fullName = "Megh Bari"

for (const iterator of fullName) {
    console.log(iterator)
}