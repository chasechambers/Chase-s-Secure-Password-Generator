// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// DEFINING CHOICES
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseAlphabetList = lowercaseAlphabet.split('');
const uppercaseAlphabetList = uppercaseAlphabet.split('');
const numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharactersList = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@", "[", "]", "^", "_", "`", "{", "}", "|", "~", '"', "`"]

// Add event listener to generate button

// PROMPT SECTION
function generatePassword() {
  var characterLength = prompt('Please choose between 8 and 128 characters.');
  if (characterLength >= 8 && characterLength <= 128) {
    var length = characterLength.toLowerCase();
  } else {
    var characterLength = prompt('Your number was not between 8 and 128 characters. Please try one more time.');
    if (characterLength >= 8 && characterLength <= 128) {
      var length = characterLength.toLowerCase();
    } else {
      return;
    }
  }
  var lowercaseLetters = confirm('Would you like to include lowercase characters? Okay = yes, Cancel = no'
  );
  var uppercaseLetters = confirm('Would you like to include uppercase characters? Okay = yes, Cancel = no'
  );
  var numbers = confirm('Would you like to include numbers? Okay = yes, Cancel = no');
  var specialCharacters = confirm('Would you like to include special characters? Okay = yes, Cancel = no');

  // LOWERCASE SECTION

  if (lowercaseLetters && uppercaseLetters && numbers && specialCharacters) {
    var userChoices = lowercaseAlphabetList.concat(uppercaseAlphabetList, numbersList, specialCharactersList
    );
  } else if (lowercaseLetters && uppercaseLetters && numbers) {
    var userChoices = lowercaseAlphabetList.concat(uppercaseAlphabetList, numbersList);
  } else if (lowercaseLetters && uppercaseLetters) {
    var userChoices = lowercaseAlphabetList.concat(uppercaseAlphabetList);
  } else if (lowercaseLetters && numbers) {
    var userChoices = lowercaseAlphabetList.concat(numbersList);
  } else if (lowercaseLetters && specialCharacters) {
    var userChoices = lowercaseAlphabetList.concat(specialCharactersList);
  } else if (lowercaseLetters) {
    var userChoices = lowercaseAlphabetList;

    // UPPERCASE SECTION
  } else if (uppercaseLetters && numbers && specialCharacters) {
    var userChoices = uppercaseAlphabetList.concat(
      numbersList, specialCharactersList);
  } else if (uppercaseLetters && numbers) {
    var userChoices = uppercaseAlphabetList.concat(numbersList);
  } else if (uppercaseLetters && specialCharacters) {
    var userChoices = uppercaseAlphabetList.concat(specialCharactersList);
  } else if (uppercaseLetters) {
    var userChoices = uppercaseAlphabetList;

    // NUMBERS SECTION
  } else if (numbers && specialCharacters) {
    var userChoices = numbersList.concat(specialCharactersList);
  } else if (numbers) {
    var userChoices = numbersList;

    // SPECIAL CHARACTERS SECTION
  } else if (specialCharacters) {
    var userChoices = specialCharactersList;
  } else {
    return;
  }

    // CREATES PASSWORD
  var passwordArray = [];
  for(i=0; i<characterLength; i++) {
    var randomItems = Math.floor(Math.random()*userChoices.length);
    passwordArray.push(userChoices[randomItems]);
  }
  var newPassword = passwordArray.join('');

  return newPassword;
}


generateBtn.addEventListener('click', writePassword);
