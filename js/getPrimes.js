module.exports = 
getPrimes = (number) => {
    
    if (typeof number == "undefined") {
        console.log("getPrimes requires a parameter of positive integer, greater than 1");
        return false;
    }

    if (isNaN(number)) {
        console.log("getPrimes requires an integer as a parameter");
        return false;
    }

    if (number < 2) {
        console.log("getPrimes requires an integer greater than 1 as it's only parameter");
        return false;
    }

    let primes = []; 
    let nonPrimes = [];

    for (let i = 2; i <= number; ++i) {
      if (nonPrimes[i] === undefined) { // not in nonPrimes then...
          // it's a prime number
          primes.push(i);
          // it seems that multiples of 2 aren't prime numbers, so...
          let multiplesOfI = i * i;
          for (let multiplesOfI = i * i; multiplesOfI <= number; multiplesOfI += i) {
              nonPrimes[multiplesOfI] = "selected";
          }
      }
    }
    
    return primes;
}