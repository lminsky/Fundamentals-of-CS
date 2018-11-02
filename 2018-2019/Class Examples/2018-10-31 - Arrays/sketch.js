function setup() {
  var a = [55, 62, 17, 20, 29, 7, 99];
  // console.log( a[0] );
  // console.log( a.length );

  // sum = sum + a[0];
  // sum = sum + a[1];
  // sum = sum + a[2];
  // sum = sum + a[3];
  // sum = sum + a[4];
  // sum = sum + a[5];
  // sum = sum + a[6];

  var sum = 0;
  for(var i = 0; i < a.length; i = i + 1) {
    sum = sum + a[i];
  }
  console.log("The sum is", sum);
  console.log("The average is", sum/a.length);

  // a[0] = a[0] * 2;
  // a[1] = a[1] * 2;
  // a[2] = a[2] * 2;
  // a[3] = a[3] * 2;
  // a[4] = a[4] * 2;
  // a[5] = a[5] * 2;
  // a[6] = a[6] * 2;

  for(var i = 0; i < a.length; i = i + 1) {
    a[i] = a[i] * 2;
  }

  console.log(a);
  a.push(7);
  console.log(a);
}
