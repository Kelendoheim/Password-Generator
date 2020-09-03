// Assignment Code
var generateBtn = document.querySelector("#generate");
//Necessary arrays for generating various characters
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
//prompts user for number between 8 and 128 until correct number is input
var passwordLength = prompt("Enter desired number of characters for password:");

while (passwordLength < 8 || passwordLength > 128){

  alert("For maximum security, please choose a numeric length between 8 and 128 characters");
  var passwordLength = prompt("Enter desired number of characters for password:");
}
//checks to see which types of character is desired for the password
var lowercaseBoolean = confirm("Would you like to include lowercase letters?");
var uppercaseBoolean = confirm("Would you like to include UPPERCASE letters?");
var numberBoolean = confirm("Would you like to include numbers?");
var specialCharBoolean = confirm(
  "Would you like to include special characters?"
);

if (lowercaseBoolean  === false && uppercaseBoolean === false && numberBoolean === false && specialCharBoolean === false) {
  alert("You have selected no characters for your password. Please try again.");
};



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
