function setup() {
  fibonacci(20);
}

function fibonacci(count) {
  var pre = 1;
  var cur = 1;
  console.log(pre);
  console.log(cur);
  while(count > 0) {
    var temp = pre + cur;
    console.log(temp);
    pre = cur;
    cur = temp;
    count--;
  }
}