// Assignment code here
var criteria = function() {
  alert("First, let's determine the criteria for your new password.");
  prompt("How many characters long should your password be?  Please enter a number between from 8-128.");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", criteria);
