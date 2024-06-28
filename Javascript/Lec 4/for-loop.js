// Loops => set of instruction
// 1. for => for-in, for-of, for-each
// 2 . while
// 3. do-while

// console.log("Namaste Duniya!");

// ***For Loop***

for (let i = 1; i <= 10; i++) {
  console.log("Megh");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
  break;
}

// break and continue

for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 5; i++) {
  if (i == 4) {
    continue;
  } else {
    console.log(i);
  }
}
