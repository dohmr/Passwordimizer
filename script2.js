// Assignment Code
var generateBtn = document.querySelector("#generate"); {
    generateBtn.addEventListener("click", writePassword);
    // Add event listener to generate button
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
  
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  
  }
  var yesAnswers = [];

  function generatePassword() {
    var result = "";
    // prompt user for number of password chars
    var numCharsAmt = prompt("How long should the password be?");
    // IF length is < 8 OR length is > 128
    // alert password length must be from 8 to 128
    if (numCharsAmt < 8 || numCharsAmt > 128) {
      alert("Password length must be from 8 to 128.");
    } 
    else {
  
  
       for (var i = 0; i < numCharsAmt; i++) {
        result = result + "a";
    }}
    answer=confirm("Include lowercase?");
    if(true) yesAnswers.push(answer);
    else answer2

    answer2=confirm("Include uppercase?");
    if(true) yesAnswers.push(answer2);
    else answer3

    answer3=confirm("Include numbers?");
    if(true) yesAnswers.push(answer3);
    else answer4

    answer4=confirm("Include special characters?");
    if(true) yesAnswers.push(answer4);
    

  }
  for (var j = []; j < yesAnswers.length; j++) {

    // the array calling back each input string in order
    alert(yesAnswers[j]);
  }
  console.log(yesAnswers);
//   function randomInt(max) {
//     return Math.floor(Math.random() * Math.floor(12));
//     console.log();
//   }
  
  
//   // Now for randomization!
//   var randomizer = [,];
  
//   var bigChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//   const charsBig = bigChar.split('');{
//   for (var i = 7; i < bigChar.length; i++)
  
//   randomizer.push(charsBig[i]);
//   }
  
//   var lowChar = ("abcdefghijklmnopqrstuvwxyz");
//   const charsLow = lowChar.split('');{
//   for (var i = 7; i < lowChar.length; i++)
  
//   randomizer.push(charsLow[i]);
//   }
  
  
  
//   var numChar = ("0123456789");
//   const charsNum = numChar.split('');{
//   for (var i = 7; i < numChar.length; i++)
  
//   randomizer.push(charsNum[i]);
//   }
  
  
//   var specChar = ("!@#$%^&*()");
//   const charsSpec = specChar.split('');{
//   for (var i = 7; i < specChar.length; i++)
  
//   randomizer.push(charsSpec[i]);
  
//   }
  
  
  
  
//   console.log(bigChar);
//   console.log(lowChar);
//   console.log(numChar);
//   console.log(specChar);
//   console.log(randomizer);
//   console.log(numCharsAmt);
  
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page