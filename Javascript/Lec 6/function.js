// function defination
function sayMyName() {
  console.log("Megh Bari");
}

sayMyName(); // function call

function counting() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

counting(); // function call

// function with parameter

function printNumber(num) {
  //parameter
  console.log("Printing Number:", num);
}

printNumber(5); // argument

function getAvg(num1, num2) {
  let avg = (num1 + num2) / 2;
  console.log("Average:", avg);
}

getAvg(10, 20);

// return function

function getSum(a, b, c) {
  let sum = a + b + c;
  return sum;
}

let ans = getSum(1, 2, 3);
console.log("Printing Sum:", ans);

function myName(fname, lname) {
  let fullName = fname + lname;
  return fullName;
  // if i written something below return, that will never shown in output
  // let a = 10
  // let b = 15
  // let sum = a + b
  // console.log(sum);
  // unreachable statement
}

let concat = myName("Megh ", "Bari");
console.log("My Full Name:", concat);


// expression

function multiply(a,b) {
    return a*b 
}

// let mul = multiply(2,5)
// console.log(mul);

// or

console.log(multiply(2,5));


let getDivision = function (a,b) {
    return a/b
}

let divide = getDivision(20,5)
console.log(divide);

let sqr = function(num) {
    return num*num
}

let sqrnum = sqr(5)
console.log(sqrnum);

// Arrow Function:

let getEXP = (x,y) =>{
    let ans = x**y
    return ans
}

console.log(getEXP(2,3));