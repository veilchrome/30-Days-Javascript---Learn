// Tipe Data Primitive
// Tipe data Primitive tidak bisa dimodif sekali kita membuat tipe data ini, tipe data ini tidak bisa dirubah
let NumOne = 3;
let NumTwo = 3;
console.log(NumOne == NumTwo);

let js = "Javascript";
let py = "Python";

console.log(js == py);

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff);

// Tipe Data non-Primitive
// Tipe data ini bisa dirubah
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums);

let nums1 = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums1 == numbers);

let userOne = {
  name: "Selamet Saputra",
  role: "Teaching",
  Country: "Indonesia",
};

let userTwo = {
  name: "Selamet Saputra",
  role: "Teaching",
  Country: "Indonesia",
};

console.log(userOne == userTwo);

let nums2 = [1, 2, 3];
let numbers2 = nums2;

console.log(nums2 == numbers2);

let userOne1 = {
  name1: "Selamet Saputra",
  role1: "Front End",
  country1: "Indonesia",
};

let userTwo2 = userOne1;
console.log(userOne1 == userTwo2);

//Deklarasikan Tipe Data Numbers

// let age = 22;
// const gravity = 9.81;
// let mass = 72;
// // const PI = 3.14;

// // More Examples
// const boilingPoint = 100;
// const bodyTemp = 37;

// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

//Math Function (Builin Javascript Math Function)
const PI = Math.PI;

console.log(PI);

console.log(Math.round(PI));
console.log(Math.round(9.81));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));
console.log(Math.min(-5, 3, 20, 4, 5, 10));
console.log(Math.max(-5, 3, 20, 4, 5, 10));

const randNum = Math.random();
console.log(randNum);

// Let us Create random Number between 0 to 10

const num = Math.floor(Math.random() * 11); //create random number betwwen 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10));

//Square Root
console.log(Math.sqrt(100));

console.log(Math.sqrt(2));

//Power
console.log(Math.pow(3, 2));

console.log(Math.E);

//Logaritma
console.log(Math.log(2));
console.log(Math.log(10));

// Return the natural logarithm of 2 and 10 respectively
console.log(Math.LN2);
console.log(Math.LN10);

//Trigonometri
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

// Continue Random Number Generator
