// global variables
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "acdefghijklnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let allCharacters = "";
let length = "";


// reference #generate element 
let generateBtn = document.querySelector("#generate");

// GENERATE PASSWORD FUNCTION
function writePassword() {
  let passwordLengthPrompt = Number(prompt("Pick a password length from 8 to 128 characters."));
  //if password length is null, too small, or too large, alert user and re-run function
  if (!passwordLengthPrompt || passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert("Please type a valid answer!");
    writePassword();
  }
  //if length is sufficient, add number to the length variable
  else {
    length += passwordLengthPrompt;
  }

  //user prompts
  let addLowercase = window.confirm("Would you like to include lowercase letters?");
  let addUppercase = window.confirm("Would you like to include uppercase letters?");
  let addNumbers = window.confirm("Would you like to include numbers?");
  let addSpecial = window.confirm("Would you like to include special characters?");

  //if user picks certain variables, add them to variable allCharacters. Rewrite password function if no options selected
  if (addLowercase) {
    allCharacters += lowercase;
  }
  if (addUppercase) {
    allCharacters += uppercase;
  }
  if (addNumbers) {
    allCharacters += numbers;
  }
  if (addSpecial) {
    allCharacters += special;
  }
  if (!allCharacters) {
    alert("Please select at least one character type!");
    writePassword();
  }

  //create new string to represent randomly selected characters using math.random method
  let newPassword = '';
  for (let i = 0; i < length; i++) {
    newPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    console.log(newPassword);
  }

  //send new password to the html dom element password
  let password = document.querySelector("#password");
  password.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);