// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "10"]; 
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "_", "{", "}", "|", "~", "]"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUppercase;
var confirmLowercase;

function generatePassword() {
var confirmLength = (prompt("How many characters would you like your password to contain?"));
{
    console.log(confirmLength);
}
 
while (confirmLength < 8 || confirmLength > 128) {
    alert("Password must be between 8-128 characters Try again");

var confirmLength = (prompt("How many characters would you like your password to contain?"));   

}

// function checkConfirmLength() {
//     if (confirmLength < 8 || confirmLength >128){
//         alert("Password must be between 8-128 characters Try again");
//         var confirmLength = (prompt("How many characters would you like your password to contain?"));
//     }
// }
// const = constant variables not changeable
// let = variables that might be changed

var confirmNumericCharacter = confirm("Click ok to confirm including numeric characters");


var confirmLowercase = confirm("Click Ok to confirm including lowercase characters");


var confirmUppercase = confirm("Click ok to confirm including uppercase characters");


var confirmSpecialCharacter =confirm("Click ok to confirm including special characters");



var passwordCharacters = []

if (confirmSpecialCharacter) {
    passwordCharacters =passwordCharacters.concat(special)
    // take the special characters and adding them to passwordCharacters
}

if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numeric)
    // take the numeric characters and adding them to passwordCharacters
}

if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
}

if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
}

var randomPassword = ""

for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()*
    passwordCharacters.length)];
}

return randomPassword; 

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);