function setup() {
  var sum = 0;
  var oddSum = 0;
  var x = 10;

  for(var i = 1; i < x+1; i++) {
    console.log(sum);
    sum = sum + i;
  }
  console.log(sum);

  for(var i = 1; i < x+1; i+=2) {
    console.log(oddSum);
    oddSum = oddSum + i;  
  }
  console.log(oddSum);

}