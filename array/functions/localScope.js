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


var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

