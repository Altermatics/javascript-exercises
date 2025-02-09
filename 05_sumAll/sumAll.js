
const sumAll = function (x, y) {

    let arr = []
    let total = 0

    function positive(x,y){
        for (i = x;i <= y; i++) {
          arr.push(x)
          x+=1
        }
        arr.forEach((value) => total = total + value)
        return total
      }

      function negative(x,y){
        for (i = y;i <= x; i++) {
          arr.push(y)
          y+=1
        }
        arr.forEach((value) => total = total + value)
        return total
      }
      
      if (Number.isInteger(x) === true && (Number.isInteger(y) === true)) {
        if (x < y && x >= 0 && y >= 0) {
        positive(x,y)
        return total
        } else if (x > y && x>= 0 && y>= 0){
        negative(x,y)
        return total
        } else {
            return 'ERROR'
        }
    }
        else {
            return 'ERROR'
        }
}

/*

create a loop where x + 1 until x is equal to y
everytime it loops take the number and put in an array
sum the values of the array to produe a total

*/

// Do not edit below this line
module.exports = sumAll;
