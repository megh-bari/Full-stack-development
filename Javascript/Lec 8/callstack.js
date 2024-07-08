// Function call stack
// LIFO - LAST IN, FIRST OUT 

function one() {
    console.log("ONE")
    three()
}

function two() {
    console.log("TWO")
    one()
}

function three() {
    console.log("THREE")
}

one()
two()
three()

