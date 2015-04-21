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
