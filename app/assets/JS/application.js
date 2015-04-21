//Question 1
var nums = 1;

while (nums < 101) {

  if (nums%3 === 0 && nums%5 === 0)
  {
    console.log("fizzbuzz");
  }
  else if (nums%3 === 0)
  {
    console.log("fizz");
  }
  else if (nums%5 === 0)
  {
    console.log("buzz");
  }
  else
  {
    console.log(nums);
  }
  nums = (nums + 1);
}
____________________
//Question 2
//Solution 1

var tri = "#";
while (tri != "########") {
  console.log(tri);
  tri = tri + "#" }


//Solution 2 - realized why they have a .length hint
for (tri = "#"; tri.length != 8; tri ++)
console.log(tri)




var tri = "#";
while (tri.length != 8) {
  console.log(tri);
  tri = tri + "#" }


____________________
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
    if size is odd, handle adding 1 character instead of both
    console.log(row.repeat(size/2));
    count = count + 1;
    row = row.split('').reverse().join('');
  }
}

console.log(result);

// Things to work on:
// 1. repeat doesn't work well with the odd numbers

_______________________________
//scratch pad


// var nums = 1;
//
// while (nums < 101) {
//
//   if (nums%3 === 0 && nums%5 === 0)
//   console.log("fizzbuzz");
//
//   else if (nums%3 === 0)
//   console.log("fizz");
//
//   else if (nums%5 === 0)
//   console.log("buzz");
//
//   else
//   console.log(nums);
//
//   nums = (nums + 1);
// }


    // var row = " #";
    // var column = 0;
    // var count = 0;
    // var size = Number(prompt("Pick a number", ""));
    //
    // while (count != size) {
    //   console.log(row.repeat(size/2));
    //   count = count + 1;
    //   row = row.split('').reverse().join('');
    // }
    //
    //
    // var row = " #";
    // var rowodd = ["#", " "];
    // var column = 0;
    // var count = 0;
    // var size = Number(prompt("Pick a number", ""));
    //
    // while (count !== size) {
    //   if (size%2 !== 0)
    //   {
    //     console.log( ((rowodd[0])(rowodd.reverse();)) * (size) );  <--probably doesnt make sense, I am trying to think of a way to alternate the array and print it after each time it reverses, but on the same line, and do this without starting the loop over again...
    //     count = count + 1;
    //     rowodd.reverse();
    //   }
    //   else
    //   {
    //     console.log(row.repeat(size/2));
    //     count = count + 1;
    //     row = row.split('').reverse().join('');
    //   }
    // }

    // var row = "# # # # ";
    // var row2 = " # # # #";
    // var rowcount = 0;
    // var row2count = 0;
    //
    //
    // while (rowcount != 4 || row2count != 4) {
    //   console.log(row);
    //   console.log(row2);
    //   rowcount = rowcount + 1;
    //   row2count = row2count + 1;
    //   }

    // var row = "# # # # ";
    // var row2 = " # # # #";
    // var rowcount = 0;
    // var row2count = 0;
    // var size = Number(prompt("Pick a number", ""));
    //
    // while (rowcount != size && row2count != size) {
    //   console.log(row);
    //   console.log(row2);
    //   rowcount = rowcount + (2);
    //   row2count = row2count + (2);
    //   }


    // var row = "# # # # ";
    // var row2 = " # # # #";
    // var rowcount = 0;
    // var row2count = 0;
    // var size = Number(prompt("Pick a number", ""));

    // while (rowcount != size && row2count != size) {
    //   console.log(row);
    //   console.log(row2);
    //   rowcount = rowcount + (2);
    //   row2count = row2count + (2);
    //   }

    // var row = "#";
    // var row2 = " ";
    // var rowcount = 0;
    // var row2count = 0;
    // var size = Number(prompt("Pick a number", ""));
    //
    // while (rowcount != size && row2count != size) {
    //   console.log(row);
    //   console.log(row2);
    //   rowcount = rowcount + (2);
    //   row2count = row2count + (2);
    //   }
