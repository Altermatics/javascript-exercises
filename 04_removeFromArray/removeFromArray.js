/*

Using ...args this is just comparing the values in  2 arrays
*/

const removeFromArray = function(array, ...args) {
    let newArr = []
    for (i = 0; i < array.length; i++) {
        if (!args.includes(array[i])){
        newArr.push(array[i])
        } else {
          // newArr.push(args[i])
        }
      } 
       return newArr
}

// Do not edit below this line
module.exports = removeFromArray;
