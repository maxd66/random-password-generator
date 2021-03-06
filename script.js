// Assignment Code
var generateBtn = document.querySelector('#generate');

// var test = prompt('Enter a value: ', '0');
// test = parseInt(test, 10);

// console.log(typeof test);
// console.log(test);

var allUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var allLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var allNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var allSpec = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?',];

function generatePassword() {
    var passLength = parseInt(prompt('How many characters should the password have?'), 10);
    // var useUpper = confirm('Would you like the password to contain Uppercase letters?');
    // var useLower = confirm('Would you like the password to contain lowercase letters?');
    // var useNum = confirm('Would you like the password to contain numbers?');
    // var useSpec = confirm('Would you like the password to contain special characters?');
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert('Please choose between 8 and 128 characters.')
        return 'no password generated'
    }

    var choiceObject = {
        upper: confirm('Would you like the password to contain Uppercase letters?'),
        lower: confirm('Would you like the password to contain lowercase letters?'),
        num: confirm('Would you like the password to contain numbers?'),
        spec: confirm('Would you like the password to contain special characters?')
    };


    if (
        choiceObject.upper === false &&
        choiceObject.lower === false &&
        choiceObject.num === false &&
        choiceObject.spec === false
    ) {
        alert('Please choose to use at least one type of character!');
        return 'no password generated';
    }

    var candidates = [];

    if(choiceObject.upper) {
        candidates = candidates.concat(allUpperCase);
    };

    if(choiceObject.lower) {
        candidates = candidates.concat(allLowerCase);
    };

    if(choiceObject.num) {
        candidates = candidates.concat(allNum);
    };

    if(choiceObject.spec) {
        candidates = candidates.concat(allSpec);
    };

    var password = '';

    for(var i = 0; i < passLength; i++) {
        var randIndex = Math.floor(Math.random() * candidates.length);
        password = password + candidates[randIndex];
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
