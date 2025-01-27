const reverseString = function(input) {
    let inputArray = input.split('');
    let inputArrayReverse = inputArray.reverse();
    let reverseInput = inputArrayReverse.join('');
    return reverseInput
};

/*
text = hello there
for the length of the value
take each index of value
take inedx [-1] and put into new array
use shift to put index at beginning
split string into array
take length of value sarting from end and put into new array


Use shift() to take first value and put into a new aray
*/

/*

function reverseTest(input) {
    let inputLength = input.length -1;
  for (i =0; i < inputLength; i++) {
    let lastChar = input[inputLength];
    let reverseInput = []
    reverseInput.push(lastChar)
    reverseInput.toString();
    console.log(reverseInput)
  }
}

reverseTest('supernatural')

*/

// Do not edit below this line
module.exports = reverseString;
