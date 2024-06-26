// if-else and switch

// if-else
let age = 18;

if (age >= 18) {
  console.log("I can Vote");
} else {
  console.log("I cannot Vote");
}

// else-if-else
let num = 4;
let status1 = 20;
if (num == 1) {
  console.log("A");
} else if (num == 2) {
  console.log("B");
} else if (num == 3) {
  console.log("C");
} else if (num == 4) {
  if (status1 >= 18) {
    console.log("I can Drive");
  }
  console.log("D");
} else if (num == 5) {
  console.log("E");
} else {
  // optional
  console.log("Invalid Number");
}

// Switch case

let months = 4

switch (months) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid Month");
        break;
}