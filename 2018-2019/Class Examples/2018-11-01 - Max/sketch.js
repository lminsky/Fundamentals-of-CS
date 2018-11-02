function setup() {
  var a = [5, 7, 3, 9, -5, 25, 1, 30];
  var b = [1,2,3,40,5,-6,7];


  console.log(a);
  a.shift();
  a.unshift(10);
  console.log(a);
  a.sort(function(a, b) {
    return a-b;
  });
  console.log(a);



  // console.log("Max = ", max(a));
  // console.log("Min = ", min(a));
  // console.log("Ave = ", average(a));
  // console.log("Sum = ", sum(a));
}

function max(arr) {
  var max = arr[0];
  for(var i = 0; i < arr.length; i=i+1) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return(max);
}

function min(arr) {
  var min = arr[0];
  for(var i = 0; i < arr.length; i=i+1) {
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  return(min);
}

function average(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i=i+1) {
    sum = sum + arr[i];
  }
  return sum/arr.length;
}

function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i=i+1) {
    sum = sum + arr[i];
  }
  return sum;
}