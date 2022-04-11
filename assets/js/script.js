// Assignment code here

function generatePassword() {
  
    var criteriaConfirm = window.confirm("Ok, first, let's determine what criteria your password will need to meet.");
    
    //debugger
    // if (!criteriaConfirm) {
    //   exit();
    // } else {
    
    // Beginning of length prompt  
    function inputPrompt() {
        let inputLength = window.prompt("Enter your desired number of characters from 8-128.");
      
          if (inputLength) {
            console.log(inputLength);
                        
            function inputParse() {
              var length = parseInt(inputLength);
        
              console.log(length);
              if (length > 7 && length < 129) {
                console.log("Good number")

              } else {
                console.log("Ooh, bad pick.")
                function uhuh() {
                  window.alert("You must enter a number from 8-128.");
                }
                uhuh();
                inputPrompt();
              }
            }
            inputParse();
          } else {
            window.alert("You must enter a number from 8-128.");
            inputPrompt();
            }
      }
    //End of length prompt
      inputPrompt();

    //}     

  
    //Beginning of character type prompts
    function inputChar() {
      window.alert("Next, please select from the following prompts the kinds of characters you would like to include.\nSelect either 'OK' to include the character, or 'Cancel' to skip to the next selection.");
      window.confirm("Include uppercase letters? (e.g. N,E,B,A,K,J)");
      window.confirm("Include lowercase letters? (e.g. f,o,a,i,u,p)");
      window.confirm("Include numbers? (e.g. 0,5,9,3,8,7)");
      window.confirm("And lastly, include special characters?\n(e.g. #,$,%,&,@,^)");
    
    }
    inputChar();

    //End of character prompts
    var criteriaResult = "oaLKJ)&/97LYD*&"
    return criteriaResult;
};    
function exit() {
  confirm("Are you sure you'd like to exit out?")

  if (!confirm) {
    generatePassword();

  } else {
    alert("Ok, thanks for stopping by!");
  }
}


  

  
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
generateBtn.addEventListener("click", writePassword);
