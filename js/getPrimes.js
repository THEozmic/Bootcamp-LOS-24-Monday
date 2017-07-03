function getPrimes (number) {
    if (typeof number == "undefined") {
        return false;
    }

    if (isNaN(number)) {
        return false;
    }

    if (number < 2) {
        return false;
    }

    let primes = []; 
    let nonPrimes = [];

    for (let i = 2; i <= number; ++i) {
        console.log("i: " + i);
      if (nonPrimes[i] == undefined) { // not in nonPrimes then...
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