function setup() {
  console.log(hailstone(2, 0));
}


function hailstone(n, count=0) {
  count++;
  if(n % 2 == 0) {
    n /= 2;
  } else {
    n = 3 * n + 1;
  }

  if(n == 1) return count;
  return hailstone(n, count);
}