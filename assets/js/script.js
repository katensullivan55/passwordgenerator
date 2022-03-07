// GLOBAL ASSIGNED VARIABLES
let alphaCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphaLow = 'acdefghijklnopqrstuvwxyz';
let num = '0123456789';
let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let allChar = '';
let length = '';


// Get references to the #generate element 
let generateBtn = document.querySelector("#generate");

// GENERATE PASSWORD FUNCTION
function writePassword() {
  let passwordLengthPrompt = Number(prompt('Pick a password length from 8 to 128 characters.'));
  //if password length is null, too small, or too large, alert user and re-run function
  if (!passwordLengthPrompt || passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert('Please type a valid answer!');
    writePassword();
  }
  //if length is sufficient, add number to the length variable
  else {
    length += passwordLengthPrompt;
  }

  //user prompts
  let addLowercase = window.confirm('Would you like to include lowercase letters? If so, click okay.');
  let addUppercase = window.confirm('Would you like to include uppercase letters? If so, click okay.');
  let addNumbers = window.confirm('Would you like to include numbers? If so, click okay.');
  let addSpecialChar = window.confirm('Would you like to include special characters? If so, click okay.');

  //if user picks certain variables, add them to variable allChar. if allChar is null, return to writePassword function.
  if (addLowercase) {
    allChar += alphaLow;
  }
  if (addUppercase) {
    allChar += alphaCap;
  }
  if (addNumbers) {
    allChar += num;
  }
  if (addSpecialChar) {
    allChar += specialChar
  }
  if (!allChar) {
    alert('You must include at least one character type!');
    writePassword();
  }

  //create new string to represent randomly selected characters using math.random method
  let newPassword = '';
  for (let i = 0; i < length; i++) {
    newPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
    console.log(newPassword);
  }

  //declare variable to select HTML DOM element and assign the value to be equal to newPassword variable
  let password = document.querySelector("#password");
  password.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);