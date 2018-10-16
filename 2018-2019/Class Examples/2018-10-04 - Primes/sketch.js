//Primes

function setup() {
  for(testingNumber = 1; testingNumber <= 10000; testingNumber = testingNumber + 1) {
    var numFactors = 0;
    for(var potentialFactor = 1; potentialFactor <= testingNumber/2; potentialFactor = potentialFactor + 1) {
      if(testingNumber % potentialFactor == 0) {
        numFactors = numFactors + 1;
      }
    }
    if(numFactors <= 2) {
      console.log(testingNumber);
    }
  }
}