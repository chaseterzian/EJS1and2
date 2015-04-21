//Question 3
//Solution 1 - can not figure out how to process odd numbers in time
var row = " #";
var count = 0;
var size = Number(prompt("Pick a number", ""));
var result = '';

while (count !== size) {
  if (size%2 !== 0) {
    console.log("sorry but I can not process odd numbers");
  } else {
    //if size is odd, handle adding 1 character instead of both
    console.log(row.repeat(size/2));
    count = count + 1;
    row = row.split('').reverse().join('');
  }
}

console.log(result);

// Things to work on:
// 1. repeat doesn't work well with the odd numbers
