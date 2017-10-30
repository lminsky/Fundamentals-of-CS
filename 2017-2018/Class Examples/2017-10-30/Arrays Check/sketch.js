function setup() {
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [2, 4, 5, 6, 8, 17];
  var arr3 = [10, 20, 30, 45, 55];

  console.log(average(arr1));           //Output: 
  console.log(average(arr2));           //Output: 
  console.log(average(arr3));           //Output: 
  
  var arr4 = [average(arr1), average(arr2), average(arr3)];
  
  console.log(average(arr4));           //Output: 
}

function average(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  var average = sum/array.length;
  return average;
}


