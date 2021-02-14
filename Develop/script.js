window.alert("Your password can be between 8 and 128 characters")
window.alert("Would you like numbers in your password?")
window.alert("Would you like special characters in your password?")

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", ":", ",", ".", "/", "?"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// +the user is presented with a series of prompts for password criteria when the button to generate a password is clicked on

// +the user can select which criteria to include in the password when prompted for password criteria

// +the user can choose a length of at least 8 characters and no more than 128 characters when prompted for the length of the password

// +the user can choose lowercase, uppercase, numeric, and/or special characters when promtped for character types to include in the password

// +the user's input should be validated and at least one character type should be selected when the user answers each prompt

// +a password is generated that matches the selected criteria when all prompts are answered

// +the password is either displayed in an alert or written to the page when the password is generated
