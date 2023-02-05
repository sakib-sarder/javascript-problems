/* 
    1.show output from : 1 to 50
    2.if the number is divisible by 2 then istead of the number show 'foo'
    2.if the number is divisible by 5 then istead of the number show 'bar'
    2.if the number is divisible by  3 and 5 then istead of the number show 'foo bar'
    */

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foo bar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
