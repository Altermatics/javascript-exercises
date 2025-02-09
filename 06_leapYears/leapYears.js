const leapYears = function(years) {
    if ((years % 4) === 0 && !((years % 100) === 0)){
        console.log(years + ' is a leap year')
        return true
      } else if((years % 400) === 0) {
        console.log(years + ' is a leap year')
        return true
      }
      
      else {
        console.log(years + ' is not a leap year')
        return false
      }
  }
  


// Do not edit below this line
module.exports = leapYears;
