// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Enter desired number of characters for password:");
var lowercaseBoolean = confirm("Would you like to include lowercase letters?");
var uppercaseBoolean = confirm("Would you like to include UPPERCASE letters?");
var numberBoolean = confirm("Would you like to include numbers?");
var specialCharBoolean = confirm(
  "Would you like to include special characters?"
);
var lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArray = [
  " ",
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "{",
  "[",
  "}",
  "]",
  "|",
  ";",
  ":",
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(passwordLength);
console.log(lowercaseBoolean);
console.log(uppercaseBoolean);
console.log(numberBoolean);
console.log(specialCharBoolean);
console.log(lowercaseArray);
console.log(uppercaseArray);
console.log(numberArray);
console.log(specialCharArray);
