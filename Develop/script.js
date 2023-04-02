// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseAlphabet = 'ABCDEFGHIJKLMOPQRSTUVWYX';
const lowercaseAlphabetList = lowercaseAlphabet.split('');
const uppercaseAlphabetList = uppercaseAlphabet.split('');
const numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharactersList = ["!"];

// Add event listener to generate button

// PROMPT SECTION
function passwordGeneratorButton() {
  var characterLength = prompt('Please choose between 8 and 128 characters.');
  if (characterLength >= 8 && characterLength <= 128) {
    var length = characterLength.toLowerCase();
  } else {
    var characterLength = prompt('Please choose between 8 and 128 characters.');
    if (characterLength >= 8 && characterLength <= 128) {
      var length = characterLength.toLowerCase();
    } else {
      return;
    }
  }
  var lowercaseLetters = confirm(
    'Would you like to include lowercase characters?'
  );
  var uppercaseLetters = confirm(
    'Would you like to include uppercase characters?'
  );
  var numbers = confirm('Would you like to include numbers?');
  var specialCharacters = confirm(
    'Would you like to include special characters?'
  );

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

  console.log(userChoices);
}

generateBtn.addEventListener('click', passwordGeneratorButton, writePassword);
