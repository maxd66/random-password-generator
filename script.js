// Assignment Code
var generateBtn = document.querySelector('#generate');

var allUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var allLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var allNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var allSpec = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?',];

function generatePassword() {
    var passLength = prompt('How many characters should the password have?');
    var useUpper = confirm('Would you like the password to contain Uppercase letters?');
    var useLower = confirm('Would you like the password to contain lowercase letters?');
    var useNum = confirm('Would you like the password to contain numbers?');
    var useSpec = confirm('Would you like the password to contain special characters?');

    if (passLength < 8 || passLength > 128) {
        alert('Please choose between 8 and 128 characters.')
    }

    if (
        useUpper === false &&
        useLower === false &&
        useNum === false &&
        useSpec === false
    ) {
        alert('Please choose to use at least one type of character!');
        return;
    }

    var candidates = '';
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
