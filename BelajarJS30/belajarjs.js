function Belajar1() {
  let numOne = 3;
  let numTwo = 3;

  console.log(numOne == numTwo);
  // Tipe Data non Primitive
  let nums = [1, 2, 3];
  nums[0] = 10;
  console.log(nums);

  // Math Object
  const PI = Math.PI;
  console.log(PI);

  console.log(Math.round(PI));
  console.log(Math.min(-5, 3, 20, 4, 5, 10));
  console.log(Math.max(-5, 3, 20, 4, 5, 10));

  const num1 = Math.floor(Math.random() * 20);
  console.log(num1);

  //Nilai Absolute
  console.log(Math.abs(-10));
  //Akar Kuadrat
  console.log(Math.sqrt(100));
  //Power / Pangkat
  console.log(Math.pow(3, 2));
  //Logaritma
  //Mengembalikan Logaritma Natural Basis E dari X, Math.log(x)
  console.log(Math.log(2));
  console.log(Math.log(10));
  // Logaritma Natural
  console.log(Math.LN2);
  console.log(Math.LN10);
  //TrigonoMetri
  Math.sin(0);
  Math.sin(60);

  Math.cos(0);
  Math.cos(60);

  Math.tan(0);
  Math.tan(90);
}
Belajar1(); // Operasi Matematika dan tipe data angka/bil real

function randomGen() {
  let randomNum = Math.random(); // generates 0 to 0.999
  let numBtnZeroAndTen = randomNum * 11;

  console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

  let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
  console.log(randomNumRoundToFloor); // this gives between 0 and 10
}

randomGen(); //Fungsi / Method Random Number Generator

function iniString() {
  let space = " ";
  let name = "SelametS";
  let country = "Indonesia";
  let language = "Indonesia & English";

  let Bio = name + space + country + language;
  console.log(Bio);
}

iniString(); // Fungsi String

// String Method

function StringMeth() {
  let stringacc = "Jonoo";
  let selindex = stringacc[0];
  console.log(selindex);
}

StringMeth();

function Spliit() {
  let string = "30 Days Of JavaScript";

  console.log(string.split()); // Changes to an array -> ["30 Days Of JavaScript"]
  console.log(string.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

  let firstName = "Asabeneh";

  console.log(firstName.split()); // Change to an array - > ["Asabeneh"]
  console.log(firstName.split("")); // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

  let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

  console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
  console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

  //Trim Javascript
  let string11 = "30 days of javascript";
  console.log(string11);
  console.log(string.trim(" "));

  //Replace mengambil substring parameter lama menjadi paramaeter baru
}

Spliit();

// Excercise #1
let challange = "30 Days of Javascript";
console.log(challange);
console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
console.log(challange.substr(3, 18));
console.log(challange.slice(0, 3));
console.log(challange.includes("Script"));
console.log(challange.split());
console.log(challange.split(" "));
excercise1 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(excercise1.split(" "));
