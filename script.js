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


function generatePassword(len) {

  var password = [];
  var character = [];
  var crunch = true;
  var answer = prompt("How long should the password be?");
  if (answer < 8 || answer > 128) {
    alert("Password length must be from 8 to 128.");
    // if (answer===true) string;
  }
  var length = answer;

  var stringUp = confirm("Include lowercase?");
  if (stringUp === true) {
    stringUp = "abcdefghijklmnopqrstuvwxyz";
    // while (password.length < length) {
    //   entity1 = Math.ceil(string.length * Math.random() * Math.random());
    //   hold = string.charAt(entity1);
    //   hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
    //   character += hold;
  } else { stringUp = false;}

  var string = confirm("Include UPPERcase?")
    if (string === true) {
      string = "abcdefghijklmnopqrstuvwxyz";
    }
  var numb = confirm("Include numbers?");
  if (numb === true) {
    numb = "0123456789";
  } else { numb = false; }

  var punch = confirm("Include special characters?");
  if (punch === true) {
    punch = "!@#$%^&*()";
  } else { punch = false; }

  




  while (password.length < length) {
    entity1 = Math.ceil(stringUp.length * Math.random() * Math.random());
    entity2 = Math.ceil(numb.length * Math.random() * Math.random());
    entity3 = Math.ceil(punch.length * Math.random() * Math.random());
    entity4 = Math.ceil(string.length * Math.random() * Math.random());
    hold = stringUp.charAt(entity1);
    hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
    character += hold;
    character += numb.charAt(entity2);
    character += punch.charAt(entity3);
    character += string.charAt(entity4);
    password = character;
  }
  password = password.split([]).sort(function () { return 1 - Math.random() }).join([]);
  return password.substr(0, len);

  console.log(string);
  console.log(numb);
  console.log(punch);

}





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
