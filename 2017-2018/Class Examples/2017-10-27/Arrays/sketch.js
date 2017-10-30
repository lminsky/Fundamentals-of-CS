function setup() {
  var arr1 = [4, 7, 3, 8, 9, 10, 1, 56, -8, 100];
  var arr2 = [1, 2, 3, 4, 5, 10, 11];
  var arr3 = [4, 2, 7, 9, 13, 15, 4];

  console.log(minimum(arr1));
  console.log(minimum(arr2));
  console.log(minimum(arr3));
  console.log(minimum(arr1) + minimum(arr2) + minimum(arr3));
}

function minimum(array) {
  var min = array[0];
  for(var i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function average(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  var average = sum/array.length;
  return average;
}


