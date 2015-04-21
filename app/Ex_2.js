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
