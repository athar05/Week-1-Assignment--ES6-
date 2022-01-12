//1. Try converting these codes into ES6 syntax-

// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

let aloo = 1;

if (aloo == 1) {
  let a = 2;
  console.log(a);
}
console.log(aloo);

// var multiply = function(x, y) {
//   return x * y;
// };

let multiply = (x, y) => x * y;

// var customer = {
//   name: "Bhaalo"
// };
// var card = {
//   amount: 20,
//   product: "Aaalo",
//   unitprice: 50
// };
// var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

let customer = { name: "Bhaloo" };

let card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50,
};

let message = ` Hello ${customer.name} wants to buy ${card.amount} ${card.product} for the price of ${card.unitprice} per piece`;

// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

let Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];

const [CEO, , Mentor] = Neog;

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

let arr = ["MA", "TA", "PA", "CA"];

const [firstName, surname] = arr;

console.log(firstName);
console.log(surname);

// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

let Aaloo = "Tasty";
let Bhaloo = "Cute";

let Obj = { Aaloo, Bhaloo };

// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a * b}.`);

// var arithmeticsObj = {
//   sum: function sum(num1, num2) {
//     return num1 + num2;
//   },
//   multiply: function multiply(num1, num2) {
//     return num1 * num2;
//   }
// };

let arithmeticsObj = {
  sum: (sum = (num1, num2) => num1 + num2),
  multiply: (multiply = (num1, num2) => num1 * num2),
};

// var avengers = {
//   operation: "Assemble",
//   members: [
//     {
//       ironMan: "Tony Stark"
//     },
//     {
//       captainAmerica: "Steve Rogers"
//     },
//     {
//       blackWidow: "Natasha Romanoff"
//     }
//   ]
// };
// var operation = avengers.operation,
//   members = avengers.members;

let avengers = {
  operation: "Assemble",
  members: [
    { ironman: "Tony Stark" },
    { captainAmerica: "Steve Rogers" },
    { blackWidow: "Natasha Romanoff" },
  ],
};

const { operation, members } = avengers;

//2. Convert ES6 to ES5

//const packIt = (...args) => console.log(args)
// packIt(1,2,3,5,5)

function packIt(...values) {
  var arr = [];
  console.log(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  console.log(arr);
}
packIt(1, 2, 3, 4, 5);

//3. Guess the outout

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

//The output will be Namaste, Welcome

const obj = {
  aloo : 1,
  bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj

console.log(aloo)

//It will return a error because of variable duplication
