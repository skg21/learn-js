function test() {
  var loc = "foo";
  console.log(loc);
}

test();

//console.log(loc);

console.log("------------- local vs global --------------");

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

var result = myOutfit();

console.log(result);
//-----------------------------------------------------------------//

var pople = "boy";

function creatPople() {
  var boy = "rohit";
  return boy;
}
var result = creatPople();
console.log(result);

