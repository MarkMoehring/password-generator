// Assignment code here


var production = function generatePassword() {
  var inputLengthEl = window.prompt("Ok, first, let's determine what criteria your password will need to meet. \nEnter your desired password length of characters from 8-128.");

  if (inputLengthEl) {
    
    console.log(inputLengthEl);
    
  } else {
    window.alert("uh-uh")
  }

  var inputChar = window.prompt("What kind of characters would you like to include?")
  
    
    
  //   var lengthConfirm = (8 <= inputLength <= 128);
  //   console.log(inputLength);
  //   console.log("Good number");
  // } else {
  //     console.log("Nope!  Try again.");
  //     alert("You must enter a number from 8-128.");
  //     generatePassword();
  // }
  
  
  

  
   
};
  
//generatePassword()  
//var specchar = !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", production);
