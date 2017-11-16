function setup() {
  var a = [5, 7, 2, 6, 1, 5, 8, 2, 6, 7];
  console.log(a);
  a.push(5);
  console.log(a);
  a.unshift(1);
  console.log(a);
  a.pop();
  console.log(a);
  a.shift();
  console.log(a);
  a.splice(1, 0, 50);
  console.log(a);


  var b = [1, true, "hello", 5.5];
  console.log(b);
  console.log(b[2]);
  createCanvas(500, 500);
  text(b[1], 100, 100);
  if(true) {
    console.log("YES");
  }
}