function setup() {
  var a = 25;
  var b = 30;

  console.log(a < b);

  console.log(a == b);

  console.log(a < b || a == b);

  console.log(a < b && a == b);

  console.log(b-a==b%a && 2*a-b == 2*(a-b) && -5*(a-b) == a);
}