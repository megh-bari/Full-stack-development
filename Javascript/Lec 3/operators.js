// Operators and Conditionals

// 1.Arithmatic Operators:
// +, -, *, /, %(remainder,modulous), **(power of)

// a. Binary Op
// let a = 10;
// let b = 5;

// console.log('Sum:', a + b);
// console.log('Subtraction:', a - b);
// console.log('Multiplication:', a * b);
// console.log('Divisiom:', a / b);
// console.log('Remainder:', a % b);
// console.log('Power:', a ** b);

// b. Unary Op
// ++num => pehle increament karo, fir use karo **Pre
// num++ => pehle use karo, fir increament karo **Post
// same for decreament

// let num = 5
// num++
// console.log(num);

// 2. Assignment Operator:
// eg let a = 5 (= (equal) means assignment )
// let a = 2;
// let b = 5;

// a = a*10
// a *= 10;
// console.log(a); //output = 20

// 3. Comparision Operator:(ans should ne true or false)
//  >,<, >=, <=, ==, ===, !=

// console.log(10>5);// true
// console.log(10<5); //false

// console.log(20>=5); // true
// console.log(5<=10); // true

// === Strict Equality 
// == Loose Equality

// console.log(5 == 5);// true
// console.log("5"==5); // true because == loose equality

// console.log("5"===5); // false because of === strict equality

// 3. Ternary Operator:

// Syntax: (condition) ? true: false

// let age = 20

// console.log((age>=18)?"I Can Vote" : "I Cannot Vote");

// 4. Logical Operator: 
// && => AND : if sab condn true hai then true else if sab condn false hai then false
// || => OR : agar koi bhi ek true hai then true else san false 
// ! => NOT : true ko false or false ko true

// AND &&
// let ans = (true && true && true )

// console.log(ans);

// OR || 

// let ans = (true || false || false)
// console.log(ans);

// NOT ! 

// let ans = !(true)
// console.log(ans);

// let answer = !(false)
// console.log(answer);

// Working with Non Boolean 
// eg, (true && 2)

// there are two types: falsey 0r truthy

// falsey: undefined, null, 0, false, NaN, ''
// truthy: anything which is not falsey

// console.log(false || "megh");
// console.log(true && 7);

// 5. Bitwise Operator:
// AND => & (multiply)
// OR => | (addition)
// NOT => ~ (inverse 0-> 1 or 1->0)
// XOR => ^ (same same hoga toh zero)
// << multiply by 2
// >> divied by 2 

console.log(2 & 5); // 0
console.log(2 | 5); // 7
console.log(~(0)); // -1, bitwise flliped
console.log(2^2); //0

console.log(5<<2);
console.log(10>>2);