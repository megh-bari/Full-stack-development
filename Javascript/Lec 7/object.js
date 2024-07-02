// object = collection of key-value paired
let obj = {
  name: "Megh",
  age: 18,
  weight: 50,
  height: "5ft 5inch",
  greet: function () {
    console.log("Namaste Duniya");
  },
};

// console.log(obj);
// obj.greet();
// console.log(typeof(obj)) // object

for (const key in obj) {
console.log(key, " ", obj[key])
}



